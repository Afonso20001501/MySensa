from rest_framework import serializers
from .models import BudgetRequest

class BudgetRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = BudgetRequest
        fields = [
            'name',
            'email',
            'phone',
            'service',
            'message',
            'budget_estimated',
        ]