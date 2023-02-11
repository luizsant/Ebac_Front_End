#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
//teste de git em andamento 
//outro teste
int registro()
{
		printf("Você escolheu o registro de nomes\n\n");
		system("pause");
}

int consulta()
{
	printf("Você escolheu consultar um nome\n");
	system("pause");
}

int deletar()

{
		printf("Você escolheu deletar nomes\n\n");
		system("pause");

}
int main ()
{
	int opcao=0;
	int laco=1;

	for (laco=1;laco=1;)
	{

		system("cls");

		setlocale(LC_ALL, "Portuguese");

	 	printf("###Cartório Ebac###\n\n");
	 	printf("Escolha a opção desejada:\n\n");
	 	printf("\t1 registrar nomes\n");
	 	printf("\t2 consultar nomes\n");
	 	printf("\t3 deletar nomes\n\n");
	 	printf("Opção:");



	 	scanf("%d", &opcao);

		system("cls");

		switch (opcao)
		{
		case 1:
			registro();
			break;
		case 2:
			consulta();
			break;

		case 3:
			deletar();
			break;
		default:
			printf("Opção não disponível\n\n\n\n");
			system("pause");
			break;
		}


	}

}
