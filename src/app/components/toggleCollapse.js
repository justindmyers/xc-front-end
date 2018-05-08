export default function toggleCollapse() {
    if($('[data-collapse]').length > 0) {
        var $button = $('[data-collapse]');
        $button.on('click', function() {
            $($(this).data('target')).toggleClass('h-collapse--expanded');
            var aria;
            if($(this).attr('aria-expanded') === 'true') {
                aria = 'false';
            } else {
                aria = 'true';
            }
            $(this).attr('aria-expanded', aria);
            $(this).toggleClass('active');
        });
    }
}
