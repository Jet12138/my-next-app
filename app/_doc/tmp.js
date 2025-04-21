if(fxIsoline!=null&&fxIsoline.getIsolneName().equals("29号坝段等温线")){
  map.put("frame_x",new double[]{
    0, 3, 102.86, 105.86, 102.86,
    102.86, 102.06, 91.29, 83.89, 77.89,
    39.49, 39.49, 4.87, 4.87, 10.99,
    10.99, 4.87, 0
  });
  map.put("frame_y",new double[]{
    6, 0, 0, 6, 6,
    28.4, 30, 28.4, 30, 34,
    82, 119.5, 119.5, 94, 90,
    46, 8.5, 6
  });
  map.put("altitude",new double[]{626.00, 745.5});
}
else if(fxIsoline!=null&&fxIsoline.getIsolneName().equals("25号坝段等温线")){
  // (0, 0), 向右，向上，向左，向下，这个顺序
  map.put("frame_x",new double[]{
      0, 3.47, 88.045, 90.545, 81.17,
      38.87, 18.43, 18.43, 20.73, 20.73,
      6.37, 6.37, 8.67, 8.67,
      4.17, 0
  });
  map.put("frame_y",new double[]{
      5, 0, 0, 5, 5,
      61.37, 86.3, 100, 101.7, 104.5,
      104.5, 101.7, 100, 78,
      6, 5
  });
  map.put("altitude",new double[]{641.0 , 745.5});
}
else if(fxIsoline!=null&&fxIsoline.getIsolneName().equals("35号坝段等温线")){
  map.put("frame_x",new double[]{
      0, 2.5, 96.7, 99.2, 94.2,
      21.46, 19.41, 19.41, 21.41, 21.41,
      8.46, 8.46, 10.46,  5.79,
      3.5, 0
  });
  map.put("frame_y",new double[]{
      5, 0, 0, 5, 5,
      98.5, 108, 112, 114.7, 117.5,
      117.5, 114.7, 112,  16,
      7.5, 5
  });
  map.put("altitude",new double[]{628.0 , 745.5});
}
