$(document).ready(function () {
    $("a").click(function (e) {
        if ($.isFunction(this.onclick)) {
            return;
        } else {
            $("#cnd-contenu").attr("data-include", $(this).attr("data-link"));
            render();
            w3_close();
            divParentCours = String($(this).parents('div:first').attr('id'));
            divParentAnnee = String($(this).parents('div:eq(1)').attr('id'));
            myFunc(divParentCours);
            myFunc(divParentAnnee);
        }
    });
});
