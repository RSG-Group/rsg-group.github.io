# Simple mini library for finding line and line segment intersection
## Functions:
* findIntersection
This function finds the intersection of two lines. </br>
*Input*: array with 4 objects inside with parametars "x" and "y" <br/>
`[{x: val, y: val}, {x: val, y: val}, {x: val, y: val}, {x: val, y: val}]`
The objects are points of the lines. There are 4 Objects for every point. In one line there are 2 points. We searching the intersection of two lines - `2 lines * 2 points = 4 objects` <br/>
*Output:* Object with "x" and "y" - the coords of the intersection point.