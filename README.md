# HW05 Description
**What dataset did you use? If not from our class site, include a link.**  
I used the 2015 Tree Census JSON dataset that you have provided.
  
**Why did you choose this dataset?**  
When I was going through the provided options, I felt like the Tree Census would actually be a dataset I would personally want to know more about. I always felt like NYC has a lot of greenery for how major of a city it is, so I wanted to learn more from my personal curiosity.  

**Which fields/features/parameters of the dataset did you use?**  
I decided to use the “Health” and “Borough” parameters. I wanted to know what the ratio of good/fair/poor health trees is in general, and because I lived in Brooklyn, surrounded by a lot of greenery for 2 years, I wanted to  map the health of trees in Brooklyn. Another reason why I wanted to do this was because I lived on a block that had entered the “Greenest Block in Brooklyn” competition, and although it didn’t win, this dataset exploration felt like a nice homage to that.  
  
**How many data points did you use?**  
I used 17,021 data points. Essentially, taking all of the available data, and filtering them by location + segmenting by health.  

**What are you visualizing? How do the shapes, colors or movement relate to the data values?**  
I am visualizing the ratio of good health vs. fair health vs. poor health trees in Brooklyn. Each ellipse is colored in a different shade of green. I am not sure what I expected, but the fact that most of the trees are healthy makes sense. I assume that poor health get cut for safety reasons eventually, and that’s why there are so few. Additionally, in classic data viz fashion, I am including a legend describing the meaning of colors + exact number of trees in that health category.  

**Include drawings and images of reference visualizations**  
I was inspired by Du Bois' circular graphs, however, due to the size of my ellipses I would not have been able to incldue the numbers inside the ellipses. Therefore, I decided to go for a nested area chart.  
![D0r2JE.jpg](https://imgpile.com/images/D0r2JE.jpg)
![D0rALr.jpg](https://imgpile.com/images/D0rALr.jpg)  

**Other thoughts:** 
I think this might have been the most difficult assignment so far. For most of my attempt to complete the assignment, I felt like I was not able to get to the data I needed, and also wasn't quite sure what types of data to pick for it to be meaningful. I eventually figured it out, though.  I was really struggling to figure out how to access the parameters I settled on, but was eventually able to read up on the filtering function, which is essentially the base of this code. Additionally, I had to reduce the size of the circles as the original was too large to contain. I, in fact, thought my code wasn’t working because I could not see an outline of an ellipse, but it was just taking up the entire screen…  
After I mapped out the circles in appropriate sizes, I thought it kind of looked like a tree crown, so I added a rectangle to make the nested graph more illustrative. Although, when I was showing the graph off to my friends, I realized it looks like a sub par windows paint drawing. Oh well!
