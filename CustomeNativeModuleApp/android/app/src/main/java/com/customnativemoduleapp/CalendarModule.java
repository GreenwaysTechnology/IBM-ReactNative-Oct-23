package com.customnativemoduleapp;

import android.util.Log;

import androidx.annotation.NonNull;

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
    @ReactMethod
    public void createCalendarEvent(String name, String location) {
        Log.d("CalendarModule", "create event called with name" + name + "and location" + location);
    }
}
