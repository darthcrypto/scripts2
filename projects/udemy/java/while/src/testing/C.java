package testing;

	//for each loop
	
public class C {
	
	/* with this method you say for the length
	 * of the array, do something
	 */
	public void foreachSyntax()
	{
		int [] arr = {34,67,23,232,6778};
		int l = arr.length;
		for(int i=0; i<l ;i++)
		{
			System.out.println(arr[i]);
		}
	}
	
	/*with this method you are saying for
	all numbers in the array, do something
	*/
	public void foreachSyntax2()
	{
		int [] arr = {34,67,232,6778};
		
		for(int i : arr)
		{
			System.out.println(i);
		}
	}

}
