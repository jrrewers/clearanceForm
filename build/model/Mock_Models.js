'use strict';

/**
 * Created by Jarek on 2016-07-31.
 */
module.exports = function (mongoose) {
    var Schema = mongoose.Schema;
    var test_schema = new Schema({
        username: String,
        password: String,
        group: { type: String, enum: ['clearance_unit_managers', 'clearance_unit_admins'] }
    });
    mongoose.model('test', test_schema);

    var test_schema2 = new Schema({
        username: String,
        password: String,
        group: { type: String, enum: ['clearance_unit_managers', 'clearance_unit_admins'] }
    });
    mongoose.model('test2', test_schema2);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsXFxNb2NrX01vZGVscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7QUFHQSxPQUFPLE9BQVAsR0FBaUIsVUFBVSxRQUFWLEVBQW9CO0FBQ2pDLFFBQUksU0FBUyxTQUFTLE1BQXRCO0FBQ0EsUUFBSSxjQUFjLElBQUksTUFBSixDQUFXO0FBQ3pCLGtCQUFVLE1BRGU7QUFFekIsa0JBQVUsTUFGZTtBQUd6QixlQUFPLEVBQUMsTUFBTSxNQUFQLEVBQWUsTUFBTSxDQUFDLHlCQUFELEVBQTRCLHVCQUE1QixDQUFyQjtBQUhrQixLQUFYLENBQWxCO0FBS0EsYUFBUyxLQUFULENBQWUsTUFBZixFQUF1QixXQUF2Qjs7QUFFQSxRQUFJLGVBQWUsSUFBSSxNQUFKLENBQVc7QUFDMUIsa0JBQVUsTUFEZ0I7QUFFMUIsa0JBQVUsTUFGZ0I7QUFHMUIsZUFBTyxFQUFDLE1BQU0sTUFBUCxFQUFlLE1BQU0sQ0FBQyx5QkFBRCxFQUE0Qix1QkFBNUIsQ0FBckI7QUFIbUIsS0FBWCxDQUFuQjtBQUtBLGFBQVMsS0FBVCxDQUFlLE9BQWYsRUFBd0IsWUFBeEI7QUFDSCxDQWZEIiwiZmlsZSI6Im1vZGVsXFxNb2NrX01vZGVscy5qcyIsInNvdXJjZVJvb3QiOiJzcmMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBKYXJlayBvbiAyMDE2LTA3LTMxLlxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobW9uZ29vc2UpIHtcclxuICAgIGxldCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XHJcbiAgICBsZXQgdGVzdF9zY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICAgICAgICB1c2VybmFtZTogU3RyaW5nLFxyXG4gICAgICAgIHBhc3N3b3JkOiBTdHJpbmcsXHJcbiAgICAgICAgZ3JvdXA6IHt0eXBlOiBTdHJpbmcsIGVudW06IFsnY2xlYXJhbmNlX3VuaXRfbWFuYWdlcnMnLCAnY2xlYXJhbmNlX3VuaXRfYWRtaW5zJ119XHJcbiAgICB9KTtcclxuICAgIG1vbmdvb3NlLm1vZGVsKCd0ZXN0JywgdGVzdF9zY2hlbWEpO1xyXG5cclxuICAgIGxldCB0ZXN0X3NjaGVtYTIgPSBuZXcgU2NoZW1hKHtcclxuICAgICAgICB1c2VybmFtZTogU3RyaW5nLFxyXG4gICAgICAgIHBhc3N3b3JkOiBTdHJpbmcsXHJcbiAgICAgICAgZ3JvdXA6IHt0eXBlOiBTdHJpbmcsIGVudW06IFsnY2xlYXJhbmNlX3VuaXRfbWFuYWdlcnMnLCAnY2xlYXJhbmNlX3VuaXRfYWRtaW5zJ119XHJcbiAgICB9KTtcclxuICAgIG1vbmdvb3NlLm1vZGVsKCd0ZXN0MicsIHRlc3Rfc2NoZW1hMik7XHJcbn07XHJcblxyXG4iXX0=