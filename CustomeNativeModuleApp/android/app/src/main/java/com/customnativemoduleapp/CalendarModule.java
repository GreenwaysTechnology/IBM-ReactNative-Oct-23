package com.customnativemoduleapp;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CalendarModule extends ReactContextBaseJavaModule {
    CalendarModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "CalendarModule";
    }

    //@ReactMethod(isBlockingSynchronousMethod = false)
//    @ReactMethod
//    public void createCalendarEvent(String name, String location) {
//        Log.d("CalendarModule", "create event called with name" + name + "and location" + location);
//    }

    //callback based
//    @ReactMethod
//    public void createCalendarEvent(String name, String location, Callback callback) {
//        Log.d("CalendarModule", "create event called with name" + name + "and location" + location);
//        //talking low level service and once the result is available, we can send result to javascript
//        Integer eventId = 100;
//        callback.invoke(eventId);
//    }
    //Promsise based
    @ReactMethod
    public void createCalendarEvent(String name, String location, Promise promise) {
        Log.d("CalendarModule", "create event called with name" + name + "and location" + location);
        //talking low level service and once the result is available, we can send result to javascript
//        Integer eventId = 100;
        //  callback.invoke(eventId);
        try {
            Integer eventId = 1000;
            promise.resolve(eventId);
        } catch (Exception e) {
            promise.reject("Cant create Event", e);
        }
    }
}
