function copyLink(inputId) {
    // Merr inputin e caktuar nga id
    var copyText = document.getElementById(inputId);

    // Selekto tekstin në input
    copyText.select();
    copyText.setSelectionRange(0, 99999); // Për celularët

    // Kopjo tekstin në clipboard
    document.execCommand("copy");

    // Tregon një mesazh për përdoruesin (opsional)
    alert("Linku është kopjuar: " + copyText.value);
}
