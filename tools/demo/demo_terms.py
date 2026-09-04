"""Capture-time stand-in for the provider's liability feed.

Run uvicorn against this instead of `app.main:app` when capturing fixtures:

    ../.venv/bin/uvicorn demo_terms:app --port 8000

Credit terms — APR, credit limit, minimum payment, next due date, original
principal — do not live in the database. `DebtService._terms` fetches them from
the aggregation provider on every request, and degrades to `{}` when that call
fails. The demo captures without provider credentials, so every one of those
fields came back null and the Credit & loans page had nothing but balances.

This supplies them instead, keyed by the account's provider id and stated in
the account's own currency (USD here), which is what `_terms` returns and what
the conversion downstream expects. Everything derived from them — utilisation,
the totals, available credit, percent repaid, and the conversion into each
display currency — is still computed by the real service. Only the raw terms
are mock; none of the arithmetic on top of them is.

Figures follow the provider's sandbox for these accounts, so they line up with
the balances already in the database. Due dates are moved into the present:
the sandbox's are years stale and read as broken rather than illustrative.
"""
from datetime import date, timedelta

from app.main import app  # noqa: F401  (re-exported for uvicorn)
from app.services.debt_service import DebtService


def _due(days: int) -> str:
    return (date.today() + timedelta(days=days)).isoformat()


TERMS = {
    # Credit Card — $410 of a $2,000 limit
    "8GjyZPeLMouwmLvVAVvqUA5KQXDe5DFxDALdz": {
        "credit_limit": 2000.0,
        "apr": 15.24,
        "apr_kind": "variable",
        "minimum_payment": 20.0,
        "next_payment_due": _due(11),
    },
    # Business Credit Card — $5,020 of a $10,000 limit
    "ylWJrRLxN6c9x7G6m6GdIdXp8oAWXAsrV9XN7": {
        "credit_limit": 10000.0,
        "apr": 17.99,
        "apr_kind": "variable",
        "minimum_payment": 125.0,
        "next_payment_due": _due(4),
    },
    # Student Loan — $65,262 outstanding on $70,000 borrowed
    "GPxKd6va9ViKozX6E6XqhPWyxXjqWjhWDlPER": {
        "origination_principal": 70000.0,
        "apr": 5.25,
        "apr_kind": "fixed",
        "minimum_payment": 412.5,
        "next_payment_due": _due(24),
    },
    # Mortgage — $56,302.06 outstanding on $425,000 borrowed
    "nVQxA9aol6fG3XP1q1PZhEW749NDWNI81dWxm": {
        "origination_principal": 425000.0,
        "apr": 3.99,
        "apr_kind": "fixed",
        "minimum_payment": 3040.34,
        "next_payment_due": _due(11),
    },
}


async def _terms(self, user):  # noqa: ANN001, ARG001
    return TERMS


DebtService._terms = _terms
