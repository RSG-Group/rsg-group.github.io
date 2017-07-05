function findIntersection(array) {
  var P1 = array.P1, P2 = array.P2, P3 = array.P3, P4 = array.P4;

  var x =
    ((P1.x * P2.y - P2.x * P1.y) * (P3.x - P4.x) -
      (P1.x - P2.x) * (P3.x * P4.y - P3.y * P4.x)) /
    ((P1.x - P2.x) * (P3.y - P4.y) - (P1.y - P2.y) * (P3.x - P4.x));
  var y =
    ((P1.x * P2.y - P2.x * P1.y) * (P3.y - P4.y) -
      (P1.y - P2.y) * (P3.x * P4.y - P3.y * P4.x)) /
    ((P1.x - P2.x) * (P3.y - P4.y) - (P1.y - P2.y) * (P3.x - P4.x));
  return { x: x, y: y };
}

function pointBetween(p, a, b) {
  return a.x <= p.x && p.x <= b.x && (a.y <= p.y && p.y <= b.y);
}

function findSegmentIntersection(points) {
  var i1 = findIntersection(points);
  var P1 = points.P1, P2 = points.P2, P3 = points.P3, P4 = points.P4;
  return pointBetween(i1, P1, P2) && pointBetween(i1, P3, P4) ? i1 : null;
}

function isSegmentIntersected(points) {
  var i1 = findIntersection(points);
  var P1 = points.P1, P2 = points.P2, P3 = points.P3, P4 = points.P4;
  return pointBetween(i1, P1, P2) && pointBetween(i1, P3, P4) ? true : false;
}

function isPointBetween(p, a, b) {
  return a <= p && p <= b;
}

window.findIntersection = findIntersection;
window.pointBetween = pointBetween;
window.isPointBetween = isPointBetween;
window.findSegmentIntersection = findSegmentIntersection;
window.isSegmentIntersected = isSegmentIntersected;