var client;
	var lastMsg;

	function connect(){
	  client = new Messaging.Client('iot.op-bit.nz', 1884, 'myClientId');

	  client.onConnectionLost = onConnectionLost;
	  client.onMessageArrived = onMessageArrived;
	  client.connect({onSuccess:onConnect});
	}

	function onConnect() {
	  client.subscribe('applications/4/nodes/0000000000000047', {qos: 2});
	  console.log('connected');
	}

	function onConnectionLost(responseObject) {
	  if (responseObject.errorCode !== 0) {
		console.log("onConnectionLost:"+responseObject.errorMessage);
	  }
	}

	function onMessageArrived(message) {
	  console.log('here');
	  console.log("onMessageArrived: "+message.payloadString);
	  lastMsg = message.payloadString;
	}

connect();

	function init() {
		
        $(function ()  {
            $('#chartContainer').dxCircularGauge({
                scale: {
                    startValue: 0,
                    endValue: 100,
                    majorTick: {
                        tickInterval: 10
                    }
                },
                rangeContainer: {
                    palette: 'pastel',
                    ranges: [
                        { startValue: 0, endValue: 33 },
                        { startValue: 33, endValue: 66 },
                        { startValue: 66, endValue: 100 },
                    ]
                },
                title: {
                    text: 'Moisture Level',
                    font: { size: 20 }
                },
                value: 23
            });

        });

	} 