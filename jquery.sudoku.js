(function($) {
    var global_settings = {};
    var plugin_name = "sudoku";
    $[plugin_name] = function(element, options) {
    var defaults = {
            grid: [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],
            fooSettings: function() {}
        }

        var plugin = this;

        plugin.settings = {}

        var $element = $(element),  
             element = element;

        plugin.init = function() {
            // the plugin's final properties are the merged default and user-provided options (if any)
            plugin.settings = $.extend({}, defaults, options);
            var $table = $("<table><tr><td></td></tr></table>");
            $element.html($table);
            $element.on("click",function() {
               
            });        
        }
      
        plugin.myPublicMethod = function() {
           alert($element.html());
        }

        var myPrivateMethod = function() {

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