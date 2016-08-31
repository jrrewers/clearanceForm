'use strict';

module.exports = function (mongoose) {
    require('./Clearance_unit')(mongoose);
    require('./Clearance_unit_manager')(mongoose);
    require('./Employee')(mongoose);
    require('./Review')(mongoose);
    require('./System_admin')(mongoose);
    require('./Verfication_unit')(mongoose);
    require('./Verification_unit_manager')(mongoose);
    require('./Mock_Models')(mongoose);

    var db = {
        development: 'mongodb://localhost:27017/clearanceForm',
        test: 'mongodb://localhost:27017/clearanceForm-test'
    };

    var MongoDB = mongoose.connect(db.test).connection;
    MongoDB.on('error', function (err) {
        console.log(err.message);
    });
    MongoDB.once('open', function () {
        console.log('mongodb connection open');
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsXFxkYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQSxPQUFPLE9BQVAsR0FBaUIsVUFBVSxRQUFWLEVBQW9CO0FBQ2pDLFlBQVEsa0JBQVIsRUFBNEIsUUFBNUI7QUFDQSxZQUFRLDBCQUFSLEVBQW9DLFFBQXBDO0FBQ0EsWUFBUSxZQUFSLEVBQXNCLFFBQXRCO0FBQ0EsWUFBUSxVQUFSLEVBQW9CLFFBQXBCO0FBQ0EsWUFBUSxnQkFBUixFQUEwQixRQUExQjtBQUNBLFlBQVEsb0JBQVIsRUFBOEIsUUFBOUI7QUFDQSxZQUFRLDZCQUFSLEVBQXVDLFFBQXZDO0FBQ0EsWUFBUSxlQUFSLEVBQXlCLFFBQXpCOztBQUVBLFFBQUksS0FBSztBQUNMLHFCQUFhLHlDQURSO0FBRUwsY0FBTTtBQUZELEtBQVQ7O0FBS0EsUUFBSSxVQUFVLFNBQVMsT0FBVCxDQUFpQixHQUFHLElBQXBCLEVBQTBCLFVBQXhDO0FBQ0EsWUFBUSxFQUFSLENBQVcsT0FBWCxFQUFvQixVQUFTLEdBQVQsRUFBYztBQUFFLGdCQUFRLEdBQVIsQ0FBWSxJQUFJLE9BQWhCO0FBQTJCLEtBQS9EO0FBQ0EsWUFBUSxJQUFSLENBQWEsTUFBYixFQUFxQixZQUFXO0FBQzVCLGdCQUFRLEdBQVIsQ0FBWSx5QkFBWjtBQUNILEtBRkQ7QUFJSCxDQXJCRCIsImZpbGUiOiJtb2RlbFxcZGIuanMiLCJzb3VyY2VSb290Ijoic3JjIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtb25nb29zZSkge1xyXG4gICAgcmVxdWlyZSgnLi9DbGVhcmFuY2VfdW5pdCcpKG1vbmdvb3NlKTtcclxuICAgIHJlcXVpcmUoJy4vQ2xlYXJhbmNlX3VuaXRfbWFuYWdlcicpKG1vbmdvb3NlKTtcclxuICAgIHJlcXVpcmUoJy4vRW1wbG95ZWUnKShtb25nb29zZSk7XHJcbiAgICByZXF1aXJlKCcuL1JldmlldycpKG1vbmdvb3NlKTtcclxuICAgIHJlcXVpcmUoJy4vU3lzdGVtX2FkbWluJykobW9uZ29vc2UpO1xyXG4gICAgcmVxdWlyZSgnLi9WZXJmaWNhdGlvbl91bml0JykobW9uZ29vc2UpO1xyXG4gICAgcmVxdWlyZSgnLi9WZXJpZmljYXRpb25fdW5pdF9tYW5hZ2VyJykobW9uZ29vc2UpO1xyXG4gICAgcmVxdWlyZSgnLi9Nb2NrX01vZGVscycpKG1vbmdvb3NlKTtcclxuXHJcbiAgICBsZXQgZGIgPSB7XHJcbiAgICAgICAgZGV2ZWxvcG1lbnQ6ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2NsZWFyYW5jZUZvcm0nLFxyXG4gICAgICAgIHRlc3Q6ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2NsZWFyYW5jZUZvcm0tdGVzdCdcclxuICAgIH07XHJcblxyXG4gICAgbGV0IE1vbmdvREIgPSBtb25nb29zZS5jb25uZWN0KGRiLnRlc3QpLmNvbm5lY3Rpb247XHJcbiAgICBNb25nb0RCLm9uKCdlcnJvcicsIGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7IH0pO1xyXG4gICAgTW9uZ29EQi5vbmNlKCdvcGVuJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ21vbmdvZGIgY29ubmVjdGlvbiBvcGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbn07ICAiXX0=