from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import BudgetRequest
from .serializers import BudgetRequestSerializer

class BudgetRequestCreateView(APIView):
    def post(self, request):
        serializer = BudgetRequestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "Solicitação de orçamento recebida com sucesso!"},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)