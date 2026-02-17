from django.urls import path
from .views import BudgetRequestCreateView

urlpatterns = [
    path('budget-request/', BudgetRequestCreateView.as_view(), name='budget-request'),
]
