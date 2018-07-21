package math;

public class B {
	
	public static void divider(int random)
	{
	
	if (random % 5 == 0 && random % 11 == 0)
	{
		System.out.println(random + " is divisible by 5 and 11");
	}
	else if (random % 5 == 0)
	{
		System.out.println(random + " is only divisible by 5");
	}
	else if (random % 11 == 0)
	{
		System.out.println(random + " is only divisible by 11");
	}
	else 
	{
		System.out.println(random + " is not divisible by 5 or 11");
	}
}	

}
