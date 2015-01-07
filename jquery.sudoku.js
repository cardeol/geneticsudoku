(function($) {
    var global_settings = {};
    var plugin_name = "sudoku";
    $[plugin_name] = function(element, options) {
    var defaults = {
            grid: [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],
            fooSettings: function() {}
        }

        var plugin = this;
        var table, 
            panel,
            selected = {
              row: 0,
              col: 0
            };

        plugin.settings = {}

        var $element = $(element),  
             element = element;

        var createTable = function(tablegrid) {
          var t = '<table class="sudoku">';
          var ch = '';
          for(var r=0; r<9; r++) {
              t = t + '<tr>';
              for(var c=0; c<9; c++) {
                ch = tablegrid[r][c];
                if(ch=='0') ch='&nbsp;';
                t = t + '<td data-fixed="false" data-row="' + r + '" data-col="' + c + '">' +  ch + '</td>';
              }              
              t = t + '</tr>';
          } 
          t += '</table>';
          return t;
        }

        var createPanel = function() {
          var t = '<table class="sudoku"><tr>';
          for(var r=1; r<=9; r++) t += '<td>' + r + '</td>';
          t = t + '</tr></table>';
          return t;
        }


        plugin.init = function() {
            // the plugin's final properties are the merged default and user-provided options (if any)
            plugin.settings = $.extend({}, defaults, options);
            
            table = $(createTable(plugin.settings.grid));
            panel = $(createPanel());
            $element.html(table);
            $element.append(panel);
            table.find("td").on("click",function() {
                console.log(selected);                
                table.find("td[data-row='" + selected.row + "'][data-col='" + selected.row + "']").css("background-color","");
                selected.row = $(this).data("row");
                selected.col = $(this).data("col");
                if($(this).data("fixed")=="true") return false;
                $(this).css("background-color","#AAB");
            });        
            panel.find("td").on("click",function() {
                
            });
        }
      
        plugin.myPublicMethod = function() {
           alert($element.html());
        }

        

        plugin.init();
    }

    $.fn[plugin_name] = function(options) {
        return this.each(function() {
            if (undefined == $(this).data(plugin_name)) {
                var plugin = new $[plugin_name](this, options);
                //element.data('sudoku').publicMethod(arg1, arg2, ... argn) or
                // element.data('sudoku').settings.propertyName
                $(this).data(plugin_name, plugin);
            }

        });

    }

})(jQuery);