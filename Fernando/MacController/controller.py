

def controllerChecker():

    import asyncio
    import aiofirebase
    import os
    import time

    firebase = aiofirebase.FirebaseHTTP("https://alexacontroller.firebaseio.com/")


    async def get_command():
        time.sleep(3)
        os.system(await firebase.get(path='commands/command'))
        await firebase.delete(path='commands/command')
        await firebase.put(path='commands', value={'command': ''})


    loop = asyncio.get_event_loop()
    loop.run_until_complete(get_command())



