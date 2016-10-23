import asyncio
import aiofirebase
import os

firebase = aiofirebase.FirebaseHTTP("https://alexacontroller.firebaseio.com/commands", auth="")








async def mycallback(event, data):
    response = await firebase.get(path=data)

loop = asyncio.get_event_loop()




async def main():
    await firebase.stream(callback=mycallback, path='commands')

loop = asyncio.get_event_loop()
loop.run_until_complete(main())




loop.run_until_complete(firebase.close())