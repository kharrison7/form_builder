// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------






let itemList = document.querySelector( "#fields" );
// This makes a loop to go through the array.
  for( let i = 0; i < formData.length; i++ ){

// This creates an input value to act as a space for the value.
    // let input       = document.createElement( "input" );
    // input.setAttribute("type", formData[i].type);

// THis alters the type of element based on the type given.
    let input = "";
  if (formData[i].type === "select"){
    input = document.createElement("select");
  } else if (formData[i].type === "textarea"){
    input = document.createElement("textarea");
  } else {
    input = document.createElement("input");
  }

  input.setAttribute("id", formData[i].id);
  input.setAttribute("icon", formData[i].icon);
  input.setAttribute("placeholder", formData[i].label);


// This should create the icon.
    let icon      = document.createElement( "i" );
    icon.setAttribute("class", "fa fa-user");
    icon.setAttribute("aria-hidden", "true");




// This creates an H2 element.
//     let liH2     = document.createElement( "h2" );
//
// // This places the memor_Options text into the liText.
//     let liText = document.createTextNode( formData[ i ] );

    console.log("lets are made.");

// // This moves the text to the H2.
//     liH2.appendChild( liText );
// // This adds the H2 to the li tile.
//     input.appendChild( liH2 );
// This adds the input to the itemList.

// This should make and attach the icon.
input.append( '<i class="fa fa-user" aria-hidden="true"></i>' );
input.appendChild( icon );


    itemList.appendChild( input );
    console.log("appends are made up to "+ i);
}
