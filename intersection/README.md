
# Simple mini library for finding line and line segment intersection
## Functions:
* *findIntersection* <br/>
This function finds the intersection of two lines. </br>
*Input*: array with 4 objects inside with parametars "x" and "y" <br/>
`[{x: val, y: val}, {x: val, y: val}, {x: val, y: val}, {x: val, y: val}]`
The objects are points of the lines. There are 4 Objects for every point. In one line there are 2 points. We searching the intersection of two lines - `2 lines * 2 points = 4 objects` <br/>
*Output:* Object with "x" and "y" - the coords of the intersection point.

* *findSegmentIntersection* <br/>
This function finds the intersection of two segements of lines. </br>
*Input*: __Same as *findIntersection* function__ - array with 4 objects inside with parametars "x" and "y" <br/>
*Output:* Object with "x" and "y" __OR__ "null" - The function returns null when the segments aren't crossed.

* *isSegmentIntersected* <br/>
This function check for intersection of two segments. </br>
*Input*: __Same as *findSegmentIntersection* function__ - array with 4 objects inside with parametars "x" and "y" <br/>
*Output:* boolean - The function returns "true" when the line segments are crossed and "false" when they aren't.

* *isPointBetween* <br/>
Check is the point "p" is between "a" and "b" <br/>
*Input:* three points (Objects with "x" and "y"). The point "p" must be first `isPointBetween(p, a, b)` <br/>
*Output:* boolean