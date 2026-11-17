// Turns an https invite link into the app's own slatemate:// link.
//
// Chat apps only make http(s) links tappable, so the app shares
//   https://jspit21.github.io/slatemate-invite/join-group#<code>
// and this page hands the code on to slatemate://join-group?code=<code>.
//
// The code rides in the URL fragment, which browsers never send to the
// server, and this script is same-origin and stores nothing — so the page
// still sets no cookies and makes no third-party request.
(function () {
  var box = document.getElementById('invite');
  if (!box) return;

  var raw = location.hash.replace(/^#/, '');
  if (!raw) raw = (location.search.match(/[?&]code=([^&]*)/) || [])[1] || '';
  var code = raw.replace(/^code=/, '').trim().toLowerCase();

  // Invite codes are short hex strings. Anything else is not ours, and is
  // never written into the page or a link.
  if (!/^[0-9a-f]{4,64}$/.test(code)) return;

  document.getElementById('open').href =
    'slatemate://' + box.getAttribute('data-path') + '?code=' + code;
  document.getElementById('code').textContent = code;
  box.hidden = false;
  document.getElementById('missing').hidden = true;
})();
