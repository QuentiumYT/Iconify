const iconRaw = import.meta.glob('../icons/logo.svg', {
  query: 'raw',
  eager: true,
  import: 'default',
});
const icon = Object.values(iconRaw)[0];
const iconifySVGIcon = $("<div>");
iconifySVGIcon.attr("style", "display: none;").attr("id", "iconify-svg-icon").attr("class", "").html(icon);
$(document).find("body").append(iconifySVGIcon);
