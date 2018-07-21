package testing;


//this is an exit control loop

public class B {
	
	public void doWhile(int InputNumber)
	{
		int i=1;
		do
		{
			System.out.println(InputNumber + " * " + i + " = " + i*InputNumber);
		    i++;
		}
		while (i<=10);
		
	}

}
