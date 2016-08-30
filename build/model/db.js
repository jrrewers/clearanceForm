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
        console.log("mongodb connection open");
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsXFxkYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQSxPQUFPLE9BQVAsR0FBaUIsVUFBVSxRQUFWLEVBQW9COztBQUVqQyxZQUFRLGtCQUFSLEVBQTRCLFFBQTVCO0FBQ0EsWUFBUSwwQkFBUixFQUFvQyxRQUFwQztBQUNBLFlBQVEsWUFBUixFQUFzQixRQUF0QjtBQUNBLFlBQVEsVUFBUixFQUFvQixRQUFwQjtBQUNBLFlBQVEsZ0JBQVIsRUFBMEIsUUFBMUI7QUFDQSxZQUFRLG9CQUFSLEVBQThCLFFBQTlCO0FBQ0EsWUFBUSw2QkFBUixFQUF1QyxRQUF2QztBQUNBLFlBQVEsZUFBUixFQUF5QixRQUF6Qjs7QUFFQSxRQUFJLEtBQUs7QUFDTCxxQkFBYSx5Q0FEUjtBQUVMLGNBQU07QUFGRCxLQUFUOztBQUtBLFFBQUksVUFBVSxTQUFTLE9BQVQsQ0FBaUIsR0FBRyxJQUFwQixFQUEwQixVQUF4QztBQUNBLFlBQVEsRUFBUixDQUFXLE9BQVgsRUFBb0IsVUFBUyxHQUFULEVBQWM7QUFBRSxnQkFBUSxHQUFSLENBQVksSUFBSSxPQUFoQjtBQUEyQixLQUEvRDtBQUNBLFlBQVEsSUFBUixDQUFhLE1BQWIsRUFBcUIsWUFBVztBQUM1QixnQkFBUSxHQUFSLENBQVkseUJBQVo7QUFDSCxLQUZEO0FBSUgsQ0F0QkQiLCJmaWxlIjoibW9kZWxcXGRiLmpzIiwic291cmNlUm9vdCI6InNyYyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobW9uZ29vc2UpIHtcclxuXHJcbiAgICByZXF1aXJlKCcuL0NsZWFyYW5jZV91bml0JykobW9uZ29vc2UpO1xyXG4gICAgcmVxdWlyZSgnLi9DbGVhcmFuY2VfdW5pdF9tYW5hZ2VyJykobW9uZ29vc2UpO1xyXG4gICAgcmVxdWlyZSgnLi9FbXBsb3llZScpKG1vbmdvb3NlKTtcclxuICAgIHJlcXVpcmUoJy4vUmV2aWV3JykobW9uZ29vc2UpO1xyXG4gICAgcmVxdWlyZSgnLi9TeXN0ZW1fYWRtaW4nKShtb25nb29zZSk7XHJcbiAgICByZXF1aXJlKCcuL1ZlcmZpY2F0aW9uX3VuaXQnKShtb25nb29zZSk7XHJcbiAgICByZXF1aXJlKCcuL1ZlcmlmaWNhdGlvbl91bml0X21hbmFnZXInKShtb25nb29zZSk7XHJcbiAgICByZXF1aXJlKCcuL01vY2tfTW9kZWxzJykobW9uZ29vc2UpO1xyXG4gICAgXHJcbiAgICBsZXQgZGIgPSB7XHJcbiAgICAgICAgZGV2ZWxvcG1lbnQ6ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2NsZWFyYW5jZUZvcm0nLFxyXG4gICAgICAgIHRlc3Q6ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2NsZWFyYW5jZUZvcm0tdGVzdCdcclxuICAgIH07XHJcblxyXG4gICAgbGV0IE1vbmdvREIgPSBtb25nb29zZS5jb25uZWN0KGRiLnRlc3QpLmNvbm5lY3Rpb247XHJcbiAgICBNb25nb0RCLm9uKCdlcnJvcicsIGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7IH0pO1xyXG4gICAgTW9uZ29EQi5vbmNlKCdvcGVuJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtb25nb2RiIGNvbm5lY3Rpb24gb3BlblwiKTtcclxuICAgIH0pO1xyXG5cclxufTsgICJdfQ==