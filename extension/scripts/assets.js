const iconRaw = import.meta.globEager('../icons/logo.svg', {
    as: 'raw',
});
const icon = Object.values(iconRaw)[0];
const iconifySVGIcon = $("<div>");
iconifySVGIcon.attr("style", "display: none;").attr("id", "iconify-svg-icon").attr("class", "").html(icon);
$(document).find("body").append(iconifySVGIcon);
