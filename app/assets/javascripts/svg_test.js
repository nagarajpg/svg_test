
// <script  src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
// <script  src="jquery.svg.js"></script> 

// $(document).ready(function() 
 $(function() 
     {
         $("#svgload").svg({
            onLoad: function()
                        {
                        var svg = $("#svgload").svg('get');
            svg.load('/assets/drawing_plain.svg', {addTo: true,  changeSize: false});        
                          },
            settings: {}
          });  


          $('#btnTest').click(function(e)
           {
               var rect = $('#slot2');
               rect.css('fill','red');
               //rect.attrib('fill','green');
               var txt = $('#idText1');
               txt.text('FF');
           });    
     });