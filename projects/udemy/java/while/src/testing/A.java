package testing;

public class A {
	
	public void printTableWhile(int InputNumber)
	{
		int i=1;
		while(i<=10)
		{
			System.out.println(InputNumber + " * " + i + " = " + i*InputNumber);
			i++;
		}
	}
	
	public void printReverseTable(int InputNumber)
	{
		int i=10;
		while(i>=1)
		{
			System.out.println(InputNumber + " * " + i + " = " + i*InputNumber);
			i--;
		}
	}

}
