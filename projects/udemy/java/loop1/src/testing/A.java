package testing;

public class A {
	
	public void printTable(int giveMeNumber)
	{
		for(int i=1; i<=10; i++)
		{
			System.out.println(giveMeNumber + " * " + i + " = " + i*giveMeNumber);
		}
		
	}
	
	public void reverseTable(int giveMeNumber)
	{
		for (int i=10;i>=1;i--)
		{
			System.out.println(giveMeNumber + " * " + i + " = " + i*giveMeNumber);
		}
	}
	
}

