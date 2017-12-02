(function () {

    var body = jQuery(document.body);

    jQuery("#products [data-drag-helper]").on("mousedown", function (event) {

        var helper = jQuery(event.currentTarget);
        var clone = helper.clone(); //clone of current element

        clone.css("width", helper.width());

        var helperOffset = helper.offset(); // return {left, top};
        var offset = {
            top: event.pageY - helperOffset.top,
            left: event.pageX - helperOffset.left
        };

        clone.css({
            top: event.pageY - offset.top,
            left: event.pageX - offset.left
        });

        var product = helper.closest("[data-product]");
        product.addClass("dragging");// search in parent

        clone.appendTo(body);

        var carts = jQuery("#carts [data-cart], #products").toArray().map(function (cart) {
            var rect = cart.getBoundingClientRect();
            return{
                node: jQuery(cart),
                rect: rect
            };
        });

        var prevCart;


        body.on("mousemove.dragProduct", function (event) {
           clone.css({
               top: event.pageY - offset.top,
               left: event.pageX - offset.left
           });



           var cloneRect = clone.get(0).getBoundingClientRect();

           var cart = carts.find(function (cart) {
               return overlaps(cart.rect, cloneRect);
           });


           if(cart && cart !== prevCart){

               if(prevCart){
                   prevCart.node.removeClass("overlaps");
               }

               cart.node.addClass("overlaps");
               prevCart = cart;

           }

           if(!cart && prevCart){
               prevCart.node.removeClass("overlaps");
               prevCart = null;
           }

        });

        body.on("mouseup.dragProduct", function (event) {
            if(prevCart){
                if(product.parent().get(0) !== prevCart.node.get(0)){
                    product.appendTo(prevCart.node);
                }

                prevCart.node.removeClass("overlaps");
                prevCart = null;
            }

            clone.remove();
            product.removeClass("dragging");

            body.off("mousemove.dragProduct");
            body.off("mouseup.dragProduct");
        });

    });

    function overlaps(rect1, rect2) {
        return !(
            rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom
        );
    }

})();


//1:06:00