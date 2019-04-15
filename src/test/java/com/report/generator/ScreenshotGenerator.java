package com.report.generator;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

import org.apache.commons.io.IOUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.ult.SampleTest;

import cucumber.api.Scenario;

public class ScreenshotGenerator extends SampleTest {

public static void generateScreenShot(Scenario s) throws IOException {
TakesScreenshot tk = (TakesScreenshot)driver;
File source = tk.getScreenshotAs(OutputType.FILE);
InputStream stream = new FileInputStream(source);
s.embed(IOUtils.toByteArray(stream),"image/jpeg");
}	
	
}
