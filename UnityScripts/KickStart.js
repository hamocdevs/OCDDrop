
function Start ()
{
	//Ensure that the Avatar is in the correct position to allow level creation
	transform.position = Vector3(0, 0, 0);
	
	//Application.ExternalCall("getVar");
	//Application.ExternalCall("callBack");
	var constructor  =  GetComponent(BuildBuilding);
	
	constructor.setFactory(GetComponent(Fabricator));
	
	var test = new Array();
	
	var doors = new Array();
	doors[0] = [[7.0, 3]];
	doors[1] = [[3.0, 2]];
	doors[2] = [[2.0, 1]];
	doors[3] = [[5.0, 5]];
	
	constructor.buildRoom(10, 8, 0, doors, -1, 0, 0);
	
	transform.position += Vector3(0, 10, 0);
	transform.LookAt(Vector3(0,0,0));
}