using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class InputManager : MonoBehaviour {

	// this will hold the information about the object the ray hits
	private RaycastHit hit;

	// link to Text and Panel in Unity editor
	public Text dialogText;
	public GameObject dialogPanel;

	private void clearDialog () {
		// hide the dialog panel and text
		dialogText.text = "";
		dialogPanel.SetActive (false);
	}
		
	private void HandleTouchEvent(GameObject actor) {
		// show the dialog panel
		dialogPanel.SetActive (true);
		// set the dialog if we've touched the cat mesh collider
		// change "Cat_low" to whatever is the name of your gameobject that has the mesh collider
		if (actor.name.Equals ("Cat_low")) {
			dialogText.text = "Cat says: \"Hi! Nice to meet you. Meow!\"";
		}
	}

	private void HandleMissEvent () {
		clearDialog ();
	}

	private void CastRayFromInputPosition(Vector2 position) {
		// Unity built-in method computes a ray from the position
		// a ray is a point in 3D space with a direction
		Ray ray = Camera.main.ScreenPointToRay (position);
		// "cast the ray" meaning extend it out to infinity to see if it hits anything in 3D space
		if (Physics.Raycast (ray, out hit)) {
			// do something with the object that's been hit
			HandleTouchEvent (hit.transform.gameObject);
		} else {
			// do something when nothing is hit
			HandleMissEvent ();
		}
	}

	private void CheckMouseInputForHit () {
		// check if you clicked mouse
		if (Input.GetMouseButtonUp (0)) {
			// Input.mousePosition gets mouse position where you clicked
			CastRayFromInputPosition (Input.mousePosition);
		}
	}


	private void CheckTouchInputForHit () {
		// check if you touched the screen
		if (Input.touchCount > 0) {
			foreach (Touch touch in Input.touches) {
				if (touch.phase == TouchPhase.Ended) {
					// touch.position gets position where you touched
					CastRayFromInputPosition (touch.position);
				}
			}
		}
	}

	// Use this for initialization
	void Start () {
		clearDialog ();
	}
	
	// Update is called once per frame
	void Update () {

		// use the mouse if testing in Unity

		#if UNITY_EDITOR
		CheckMouseInputForHit ();
		#endif

		// otherwise use the touch input for phone
		CheckTouchInputForHit ();
	}
}
