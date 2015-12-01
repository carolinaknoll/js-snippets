var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;

/* methods to set height and width of our rectangle */
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
}

rectangle.setWidth = function (newWidth) {
  this.width = newWidth;
};

/* change the height to 6 and the width to 8 using the methods */
rectangle.setHeight(6);
rectangle.setWidth(8);