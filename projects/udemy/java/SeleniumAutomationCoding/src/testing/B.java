package testing;

public class B {
	
	public void checkEvenOdd(int inputNumber)
	{
		int z=0;
		if(inputNumber < 0)
		{
			System.out.println("This is Negative Number");
			
		}
		else if (inputNumber == 0)
		{
			System.out.println("This is Zero");
		}
		else if(inputNumber % 2 == 0)
		{
			System.out.println("This is Even number");
		}
		else
		{
			System.out.println("This number is Odd");
		}
	}
	
	public void checkNumber(int inputNumber)
	{
		if(inputNumber < 0 || inputNumber >100)
		{
			System.out.println("This is Invalid Number");
		}
		else
		{
			System.out.println("This is a Valid number");
		}
	}
	
}
