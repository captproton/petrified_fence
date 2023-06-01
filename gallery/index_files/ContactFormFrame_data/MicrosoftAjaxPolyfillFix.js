/**
 * The String.startsWith method will always be polyfilled even when it exists to resolve compatibility issues between MicrosoftAjax and CKEditor
 *
 * @description
 * Both libraries are polyfilling startsWith without checking to see if the function has already been polyfilled
 * CKEditor points it's polyfill to the existing implementation, which happens to be MicrosoftAjax on webforms pages
 * MicrosoftAjax implementation doesn't support the position argument to the function and fails on every call in debug mode due to param validation
 *
 * @see https://github.com/ckeditor/ckeditor4/issues/3754
 *
 * Note: this is only needed as a temp fix until MicrosoftAjax isn't used (either webforms is removed or when the last usage or <asp:ScriptManager> is removed)
 */
Object.defineProperty(String.prototype, 'startsWith', {
    value: function(search, rawPos) {
        var pos = rawPos > 0 ? rawPos|0 : 0;
        return this.substring(pos, pos + search.length) === search;
    }
});