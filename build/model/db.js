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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsXFxkYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQSxPQUFPLE9BQVAsR0FBaUIsVUFBVSxRQUFWLEVBQW9CO0FBQ2pDLFlBQVEsa0JBQVIsRUFBNEIsUUFBNUI7QUFDQSxZQUFRLDBCQUFSLEVBQW9DLFFBQXBDO0FBQ0EsWUFBUSxZQUFSLEVBQXNCLFFBQXRCO0FBQ0EsWUFBUSxVQUFSLEVBQW9CLFFBQXBCO0FBQ0EsWUFBUSxnQkFBUixFQUEwQixRQUExQjtBQUNBLFlBQVEsb0JBQVIsRUFBOEIsUUFBOUI7QUFDQSxZQUFRLDZCQUFSLEVBQXVDLFFBQXZDO0FBQ0EsWUFBUSxlQUFSLEVBQXlCLFFBQXpCOztBQUVBLFFBQU0sS0FBSztBQUNQLHFCQUFhLHlDQUROO0FBRVAsY0FBTTtBQUZDLEtBQVg7O0FBS0EsUUFBSSxVQUFVLFNBQVMsT0FBVCxDQUFpQixHQUFHLElBQXBCLEVBQTBCLFVBQXhDO0FBQ0EsWUFBUSxFQUFSLENBQVcsT0FBWCxFQUFvQixVQUFTLEdBQVQsRUFBYztBQUFFLGdCQUFRLEdBQVIsQ0FBWSxJQUFJLE9BQWhCO0FBQTJCLEtBQS9EO0FBQ0EsWUFBUSxJQUFSLENBQWEsTUFBYixFQUFxQixZQUFXO0FBQzVCLGdCQUFRLEdBQVIsQ0FBWSx5QkFBWjtBQUNILEtBRkQ7QUFJSCxDQXJCRCIsImZpbGUiOiJtb2RlbFxcZGIuanMiLCJzb3VyY2VSb290Ijoic3JjIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtb25nb29zZSkge1xyXG4gICAgcmVxdWlyZSgnLi9DbGVhcmFuY2VfdW5pdCcpKG1vbmdvb3NlKTtcclxuICAgIHJlcXVpcmUoJy4vQ2xlYXJhbmNlX3VuaXRfbWFuYWdlcicpKG1vbmdvb3NlKTtcclxuICAgIHJlcXVpcmUoJy4vRW1wbG95ZWUnKShtb25nb29zZSk7XHJcbiAgICByZXF1aXJlKCcuL1JldmlldycpKG1vbmdvb3NlKTtcclxuICAgIHJlcXVpcmUoJy4vU3lzdGVtX2FkbWluJykobW9uZ29vc2UpO1xyXG4gICAgcmVxdWlyZSgnLi9WZXJmaWNhdGlvbl91bml0JykobW9uZ29vc2UpO1xyXG4gICAgcmVxdWlyZSgnLi9WZXJpZmljYXRpb25fdW5pdF9tYW5hZ2VyJykobW9uZ29vc2UpO1xyXG4gICAgcmVxdWlyZSgnLi9Nb2NrX01vZGVscycpKG1vbmdvb3NlKTtcclxuXHJcbiAgICBjb25zdCBkYiA9IHtcclxuICAgICAgICBkZXZlbG9wbWVudDogJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvY2xlYXJhbmNlRm9ybScsXHJcbiAgICAgICAgdGVzdDogJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvY2xlYXJhbmNlRm9ybS10ZXN0J1xyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgTW9uZ29EQiA9IG1vbmdvb3NlLmNvbm5lY3QoZGIudGVzdCkuY29ubmVjdGlvbjtcclxuICAgIE1vbmdvREIub24oJ2Vycm9yJywgZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTsgfSk7XHJcbiAgICBNb25nb0RCLm9uY2UoJ29wZW4nLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbW9uZ29kYiBjb25uZWN0aW9uIG9wZW4nKTtcclxuICAgIH0pO1xyXG5cclxufTsgICJdfQ==