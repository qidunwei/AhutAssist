Ext.define('Evaluate_Vote.DirectAPI', {
    requires: ['Ext.direct.*', 'Ext.Ajax']
}, function () {
    Ext.Ajax.request({
        url: "/handler/Evaluate/VoteHandler.ashx",
        async: false,
        success: function (xhr) {
            Ext.globalEval(xhr.responseText);
        },
        failure: function (xhr) {
            throw "Direct API load failed with error code " + xhr.status + ": " + xhr.statusText;
        }
    });
    Ext.direct.Manager.addProvider(Evaluate.Vote.Handler);
});