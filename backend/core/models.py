from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

class PortfolioItem(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='portfolio/')
    description = models.TextField()

class BudgetRequest(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, verbose_name="Nome")
    email = models.EmailField(verbose_name="E-mail")
    phone = models.CharField(max_length=20, blank=True, null=True, verbose_name="Telefone")
    service = models.CharField(
        max_length=100,
        verbose_name="Serviço de interesse",
        blank=True
    )
    message = models.TextField(verbose_name="Mensagem / Detalhes do projeto")
    budget_estimated = models.CharField(
        max_length=100,
        blank=True,
        null=True,
        verbose_name="Orçamento estimado (opcional)"
    )
    status = models.CharField(
        max_length=20,
        default="new",
        choices=[
            ("new", "Novo"),
            ("contacted", "Contactado"),
            ("in_progress", "Em andamento"),
            ("closed", "Fechado"),
        ],
        verbose_name="Status"
    )

    class Meta:
        verbose_name = "Solicitação de Orçamento"
        verbose_name_plural = "Solicitações de Orçamento"
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} - {self.created_at.strftime('%d/%m/%Y %H:%M')}"