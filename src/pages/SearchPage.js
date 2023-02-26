import React from 'react';
import { useState } from "react";

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import SubmitOptionsButton from '../components/SubmitOptionsBtn';
import axios from 'axios';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;



function SearchPage() {

  // define state for ingredients selection

    const [selectedValues, setSelectedValues] = useState([]);

  // define state for cuisine selection
  
    const [cuisine, setCuisine] = useState([]);

  // define state for meal type

    const [mealType, setMealType] = useState([]);

  // define state for intolerances

    const [intolerance, setIntolerance] = useState([]);

  // define state for exclude cuisine checkbox

    const [option, setOption] = useState(true);

  // define state for ingredients to exclude

    const [excludedValues, setExcludedValues] = useState([]);

  // define state for Diet Type

    const [dietType, setDietType] = useState([]);

    // create click handler function that triggers API call

    const clickHandler = () => {
      // TODO: build api call url parameters based on user input

      let $selectedValues = '&query=';
     
      if(selectedValues===null||selectedValues.length===0) {

        $selectedValues = `&query=chicken,spinach,cream`;

      } else {

        selectedValues.forEach((arr, index) => {
          $selectedValues += index === selectedValues.length -1 ? `${arr.ingredients}` : `${arr.ingredients},`

        })
      }

      // test output
      console.log($selectedValues)

      // let cuisine = ``;
      // let mealType = ``;
      // let intolerance = ``;
      // let option = ``;
      // let excludedValues = ``;
      // let dietType = ``;

        const APIkey = `apiKey=be7afc61d90741a1a46cbf724312a257`;
        const searchURL = `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&addRecipeNutrition=true&`;

        // API get request using Axios

        axios.get(`${searchURL}${APIkey}${$selectedValues}`)
        .then(response => {console.log(response)}); //test
      
  }

  
  return (
    <div>
      <div className='header'>
        <div className='search-container'>
          <div className='ingredients-search'>

            <h2>Ingredient Search</h2>

            {/* <div className='search-items'>
              <div>
                <input type="text" placeholder='Search your ingredients here...' />
              </div>
              <div className='ingredients-list'>
                <h3>Ingredients</h3>
              </div>
            </div> */}

                {/* Material UI (MUI) components */}

                <Stack spacing={3} sx={{ width: 500, marginLeft: 3 }}>

                <Autocomplete

                  multiple
                  id="tags-outlined"
                  options={top1000ingredients} 
                  getOptionLabel={(option) => option.ingredients}
                  filterSelectedOptions

                    onChange={(event, newValue) => {
                        event.preventDefault();
                        setSelectedValues(newValue);
                        ;
                      }}

                  renderInput={(params) => (

                      <TextField
                        {...params}
                        label="Ingredients selection"
                        placeholder="Favorites"
                      />

                  )}

                />

                {/* cuisine */}

                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={topCuisine}
                  getOptionLabel={(option) => option.cuisine}

                  onChange={(event, newValue) =>{
                    event.preventDefault();
                    setCuisine(newValue);
                  }}

                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Cuisine" />}
                />

                {/* meal type */}

                <Autocomplete
                  disablePortal
                  id="combo-box"
                  options={meal}
                  getOptionLabel={(option) => option.type}

                  onChange={(event, newValue) =>{
                    event.preventDefault();
                    setMealType(newValue);
                  }}

                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Meal type" />}
                />

                  {/* diet definitions */}

                  <Autocomplete
                    disablePortal
                    id="combo-box"
                    options={dietDefinition}
                    getOptionLabel={(option) => option.type}

                    onChange={(event, newValue) =>{
                      event.preventDefault();
                      setDietType(newValue);
                    }}

                    sx={{ width: 300 }}
                    renderInput={(params) => 
                      
                    <TextField {...params} label="Diet Definition" />

                    }

                  />

                {/* intolerances */}

                <Autocomplete
                      multiple
                      id="checkboxes-tags-demo"
                      options={intolerances}
                      disableCloseOnSelect
                      getOptionLabel={(option) => option.type}

                      onChange={(event, newValue) => {
                        event.preventDefault();
                        setIntolerance(newValue);
                      }}

                      renderOption={(props, option, { selected }) => (
                        <li {...props}>
                          <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                          />
                          {option.type}
                        </li>
                      )}
                      style={{ width: 500 }}
                      renderInput={(params) => (
                        <TextField {...params} label="Do you have any intolerances?" placeholder="Intolerances" />
                      )}
                    />

                    <FormGroup>

                      <FormControlLabel 

                            control={<Checkbox defaultChecked />} 
                            label="Any ingredients you want to exclude?"
                            onChange={(event, newvalue) => {
                                event.preventDefault();
                                setOption(newvalue);
                            }}
                        
                        />

                    </FormGroup>

                    {/* food to exclude */}

                    <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={top1000ingredients}
                        getOptionLabel={(option) => option.ingredients}
                                filterSelectedOptions

                        onChange={(event, newValue) => {
                            event.preventDefault();
                            setExcludedValues(newValue);
                          }}

                        renderInput={(params) => (

                          <TextField
                            {...params}
                            label="Ingredients to exclude"
                            placeholder="do not include"
                          />

                        )}
                />
                </Stack>
          </div>
        </div>
        <SubmitOptionsButton clickHandler={clickHandler}/>
      </div>
      <div className='recipes-container'>


        <h3>What can you make?</h3>
        <div className='recipes'>
          
          <div className='recipe'><h3>Recipe 1</h3></div>
          <div className='recipe'><h3>Recipe 2</h3></div>
          <div className='recipe'><h3>Recipe 3</h3></div>
          <div className='recipe'><h3>Recipe 4</h3></div>
        </div>
        
      </div>
    </div>
  );
};


// Top 1000 ingredients

const top1000ingredients = [
  { ingredients: "5 spice powder", id: 1002002 },
  { ingredients: "acorn squash", id: 11482 },
  { ingredients: "adobo sauce", id: 6979 },
  { ingredients: "agave nectar", id: 19912 },
  { ingredients: "ahi tuna", id: 15117 },
  { ingredients: "alfredo pasta sauce", id: 93606 },
  { ingredients: "almond extract", id: 1002050 },
  { ingredients: "almond flour", id: 93740 },
  { ingredients: "almond milk", id: 93607 },
  { ingredients: "almonds", id: 12061 },
  { ingredients: "amaretto", id: 10014534 },
  { ingredients: "ancho chiles", id: 10211962 },
  { ingredients: "anchovies", id: 15001 },
  { ingredients: "andouille sausage", id: 7064 },
  { ingredients: "angel food cake mix", id: 18087 },
  { ingredients: "angel hair pasta", id: 10020420 },
  { ingredients: "angostura bitters", id: 93653 },
  { ingredients: "apple", id: 9003 },
  { ingredients: "apple butter spread", id: 19294 },
  { ingredients: "apple cider", id: 1009016 },
  { ingredients: "apple juice", id: 9016 },
  { ingredients: "apple pie spice", id: 1042035 },
  { ingredients: "apricot preserves", id: 19719 },
  { ingredients: "apricots", id: 9021 },
  { ingredients: "arborio rice", id: 10020052 },
  { ingredients: "arrowroot powder", id: 20003 },
  { ingredients: "artichoke heart quarters", id: 93828 },
  { ingredients: "artichokes", id: 11007 },
  { ingredients: "arugula", id: 11959 },
  { ingredients: "asafoetida", id: 1032035 },
  { ingredients: "asafoetida powder", id: 0 },
  { ingredients: "asiago cheese", id: 1001033 },
  { ingredients: "asian pear", id: 9252 },
  { ingredients: "asparagus spears", id: 11011 },
  { ingredients: "avocado", id: 9037 },
  { ingredients: "avocado oil", id: 4581 },
  { ingredients: "baby bell peppers", id: 10311821 },
  { ingredients: "baby bok choy", id: 93636 },
  { ingredients: "baby carrots", id: 11960 },
  { ingredients: "baby corn", id: 10011168 },
  { ingredients: "baby spinach leaves", id: 11457 },
  { ingredients: "baby-back ribs", id: 10010204 },
  { ingredients: "baby-back ribs", id: 10192 },
  { ingredients: "bacon", id: 10123 },
  { ingredients: "bacon fat", id: 4609 },
  { ingredients: "baguette", id: 18033 },
  { ingredients: "baking bar", id: 19078 },
  { ingredients: "baking powder", id: 18371 },
  { ingredients: "baking soda", id: 18372 },
  { ingredients: "balsamic glaze", id: 98998 },
  { ingredients: "balsamic vinegar", id: 2069 },
  { ingredients: "bamboo shoots", id: 11028 },
  { ingredients: "banana", id: 9040 },
  { ingredients: "basmati rice", id: 10020444 },
  { ingredients: "bay leaves", id: 2004 },
  { ingredients: "bbq sauce", id: 6150 },
  { ingredients: "beans", id: 16069 },
  { ingredients: "beef", id: 23572 },
  { ingredients: "beef brisket", id: 13023 },
  { ingredients: "beef broth", id: 6008 },
  { ingredients: "beef chuck roast", id: 13786 },
  { ingredients: "beef stock", id: 6170 },
  { ingredients: "beef tenderloin", id: 13926 },
  { ingredients: "beer", id: 14003 },
  { ingredients: "beer", id: 14006 },
  { ingredients: "beets", id: 11080 },
  { ingredients: "bell pepper", id: 10211821 },
  { ingredients: "berries", id: 1009054 },
  { ingredients: "biscuit mix", id: 18010 },
  { ingredients: "biscuits", id: 18009 },
  { ingredients: "bittersweet chocolate", id: 19903 },
  { ingredients: "black bean sauce", id: 99210 },
  { ingredients: "black beans", id: 16015 },
  { ingredients: "black olives", id: 1059195 },
  { ingredients: "black pepper", id: 1002030 },
  { ingredients: "black sesame seeds", id: 10012023 },
  { ingredients: "blackberries", id: 9042 },
  { ingredients: "blanched almonds", id: 12062 },
  { ingredients: "blood orange", id: 1009200 },
  { ingredients: "blue cheese", id: 1004 },
  { ingredients: "blueberries", id: 9050 },
  { ingredients: "bok choy", id: 11116 },
  { ingredients: "boneless skinless chicken breast", id: 1055062 },
  { ingredients: "bourbon", id: 10014037 },
  { ingredients: "brandy", id: 10114037 },
  { ingredients: "bread", id: 18064 },
  { ingredients: "bread flour", id: 10120129 },
  { ingredients: "breakfast links", id: 7919 },
  { ingredients: "brie", id: 1006 },
  { ingredients: "broccoli", id: 11090 },
  { ingredients: "broccoli florets", id: 10011090 },
  { ingredients: "brown rice", id: 20040 },
  { ingredients: "brown rice flour", id: 20090 },
  { ingredients: "brown sugar", id: 19334 },
  { ingredients: "brownie mix", id: 18632 },
  { ingredients: "brussel sprouts", id: 11098 },
  { ingredients: "bulgur", id: 20012 },
  { ingredients: "butter", id: 1001 },
  { ingredients: "butterhead lettuce", id: 11250 },
  { ingredients: "buttermilk", id: 1230 },
  { ingredients: "butternut squash", id: 11485 },
  { ingredients: "butterscotch chips", id: 19070 },
  { ingredients: "cabbage", id: 11109 },
  { ingredients: "caesar dressing", id: 43015 },
  { ingredients: "cajun seasoning", id: 1032028 },
  { ingredients: "cake flour", id: 10020129 },
  { ingredients: "candy canes", id: 93759 },
  { ingredients: "candy coating", id: 98857 },
  { ingredients: "candy melts", id: 93775 },
  { ingredients: "canned black beans", id: 16018 },
  { ingredients: "canned diced tomatoes", id: 11531 },
  { ingredients: "canned garbanzo beans", id: 16058 },
  { ingredients: "canned green chiles", id: 11980 },
  { ingredients: "canned kidney beans", id: 16034 },
  { ingredients: "canned mushrooms", id: 11264 },
  { ingredients: "canned pinto beans", id: 16044 },
  { ingredients: "canned red kidney beans", id: 10016034 },
  { ingredients: "canned tomatoes", id: 10011693 },
  { ingredients: "canned tuna", id: 10115121 },
  { ingredients: "canned white beans", id: 16051 },
  { ingredients: "canned white cannellini beans", id: 10016051 },
  { ingredients: "cannellini beans", id: 10716050 },
  { ingredients: "cantaloupe", id: 9181 },
  { ingredients: "capers", id: 2054 },
  { ingredients: "caramel sauce", id: 19364 },
  { ingredients: "caramels", id: 19074 },
  { ingredients: "caraway seed", id: 2005 },
  { ingredients: "cardamom", id: 2006 },
  { ingredients: "cardamom pods", id: 1002006 },
  { ingredients: "carp", id: 15008 },
  { ingredients: "carrots", id: 11124 },
  { ingredients: "cat fish filets", id: 15010 },
  { ingredients: "cauliflower", id: 11135 },
  { ingredients: "cauliflower florets", id: 10011135 },
  { ingredients: "cauliflower rice", id: 10111135 },
  { ingredients: "celery", id: 11143 },
  { ingredients: "celery ribs", id: 10111143 },
  { ingredients: "celery root", id: 11141 },
  { ingredients: "celery salt", id: 1052047 },
  { ingredients: "celery seed", id: 2007 },
  { ingredients: "cereal", id: 8029 },
  { ingredients: "champagne", id: 10043155 },
  { ingredients: "chana dal", id: 99236 },
  { ingredients: "cheddar", id: 1009 },
  { ingredients: "cheese", id: 1041009 },
  { ingredients: "cheese curds", id: 98921 },
  { ingredients: "cheese dip", id: 1188 },
  { ingredients: "cheese soup", id: 6038 },
  { ingredients: "cheese tortellini", id: 10093727 },
  { ingredients: "cherry", id: 9070 },
  { ingredients: "cherry pie filling", id: 19314 },
  { ingredients: "cherry tomatoes", id: 10311529 },
  { ingredients: "chestnuts", id: 12098 },
  { ingredients: "chia seeds", id: 12006 },
  { ingredients: "chicken base", id: 6080 },
  { ingredients: "chicken bouillon", id: 6480 },
  { ingredients: "chicken bouillon granules", id: 1006080 },
  { ingredients: "chicken breasts", id: 5062 },
  { ingredients: "chicken broth", id: 6194 },
  { ingredients: "chicken drumsticks", id: 5066 },
  { ingredients: "chicken legs", id: 5075 },
  { ingredients: "chicken pieces", id: 1005006 },
  { ingredients: "chicken sausage", id: 93668 },
  { ingredients: "chicken stock", id: 6172 },
  { ingredients: "chicken tenders", id: 1015062 },
  { ingredients: "chicken thighs", id: 5091 },
  { ingredients: "chicken wings", id: 5100 },
  { ingredients: "chickpea", id: 16057 },
  { ingredients: "chile garlic sauce", id: 93749 },
  { ingredients: "chili paste", id: 6973 },
  { ingredients: "chili peppers", id: 11962 },
  { ingredients: "chili powder", id: 2009 },
  { ingredients: "chili sauce", id: 6972 },
  { ingredients: "chipotle chiles in adobo", id: 11632 },
  { ingredients: "chipotle chilies", id: 98839 },
  { ingredients: "chipotle peppers in adobo", id: 99223 },
  { ingredients: "chive & onion cream cheese spread", id: 93748 },
  { ingredients: "chocolate", id: 19081 },
  { ingredients: "chocolate chip cookies", id: 28027 },
  { ingredients: "chocolate chunks", id: 10419903 },
  { ingredients: "chocolate ice cream", id: 19270 },
  { ingredients: "chocolate milk", id: 1102 },
  { ingredients: "chocolate sandwich cookies", id: 18166 },
  { ingredients: "chocolate syrup", id: 14181 },
  { ingredients: "chocolate wafer cookies", id: 10118157 },
  { ingredients: "chorizo sausage", id: 7019 },
  { ingredients: "cider vinegar", id: 2048 },
  { ingredients: "cilantro", id: 11165 },
  { ingredients: "cinnamon roll", id: 99020 },
  { ingredients: "cinnamon stick", id: 1002010 },
  { ingredients: "cinnamon sugar", id: 10219335 },
  { ingredients: "cinnamon swirl bread", id: 18047 },
  { ingredients: "clam juice", id: 14187 },
  { ingredients: "clams", id: 15157 },
  { ingredients: "clarified butter", id: 93632 },
  { ingredients: "clove", id: 1002011 },
  { ingredients: "coarse salt", id: 1002047 },
  { ingredients: "coarsely ground pepper", id: 2035 },
  { ingredients: "cocoa nibs", id: 98846 },
  { ingredients: "cocoa powder", id: 19165 },
  { ingredients: "coconut", id: 12104 },
  { ingredients: "coconut aminos", id: 98929 },
  { ingredients: "coconut butter", id: 93746 },
  { ingredients: "coconut cream", id: 12115 },
  { ingredients: "coconut extract", id: 1032050 },
  { ingredients: "coconut flour", id: 93747 },
  { ingredients: "coconut milk", id: 12118 },
  { ingredients: "coconut oil", id: 4047 },
  { ingredients: "coconut water", id: 12119 },
  { ingredients: "cod", id: 15015 },
  { ingredients: "coffee", id: 14209 },
  { ingredients: "cognac", id: 10414037 },
  { ingredients: "cola", id: 14400 },
  { ingredients: "colby jack", id: 1011 },
  { ingredients: "collard greens", id: 11161 },
  { ingredients: "condensed cream of celery soup", id: 6010 },
  { ingredients: "condensed cream of mushroom soup", id: 6147 },
  { ingredients: "confectioner's swerve", id: 99084 },
  { ingredients: "cooked bacon", id: 10862 },
  { ingredients: "cooked brown rice", id: 20041 },
  { ingredients: "cooked chicken breast", id: 5064 },
  { ingredients: "cooked ham", id: 10802 },
  { ingredients: "cooked long grain rice", id: 10220445 },
  { ingredients: "cooked pasta", id: 20421 },
  { ingredients: "cooked polenta", id: 1008166 },
  { ingredients: "cooked quinoa", id: 20137 },
  { ingredients: "cooked wild rice", id: 20088 },
  { ingredients: "cookies", id: 10118192 },
  { ingredients: "coriander", id: 2012 },
  { ingredients: "corn", id: 11168 },
  { ingredients: "corn bread mix", id: 18022 },
  { ingredients: "corn chips", id: 19003 },
  { ingredients: "corn flakes cereal", id: 8020 },
  { ingredients: "corn flour", id: 20019 },
  { ingredients: "corn kernels", id: 11172 },
  { ingredients: "corn oil", id: 42289 },
  { ingredients: "corn tortillas", id: 18363 },
  { ingredients: "cornbread", id: 18023 },
  { ingredients: "corned beef", id: 13346 },
  { ingredients: "cornish hens", id: 5307 },
  { ingredients: "cornmeal", id: 35137 },
  { ingredients: "cornstarch", id: 20027 },
  { ingredients: "cotija cheese", id: 1001019 },
  { ingredients: "cottage cheese", id: 1012 },
  { ingredients: "country bread", id: 10018029 },
  { ingredients: "courgettes", id: 11477 },
  { ingredients: "couscous", id: 20028 },
  { ingredients: "cow pea", id: 16063 },
  { ingredients: "crabmeat", id: 10015136 },
  { ingredients: "cracked pepper", id: 2030 },
  { ingredients: "cranberries", id: 9078 },
  { ingredients: "cranberry juice", id: 43382 },
  { ingredients: "cream", id: 1053 },
  { ingredients: "cream cheese", id: 1017 },
  { ingredients: "cream cheese block", id: 1186 },
  { ingredients: "cream of chicken soup", id: 6016 },
  { ingredients: "cream of tartar", id: 18373 },
  { ingredients: "creamed corn", id: 11174 },
  { ingredients: "creamy peanut butter", id: 10116098 },
  { ingredients: "creme fraiche", id: 1001056 },
  { ingredients: "cremini mushrooms", id: 11266 },
  { ingredients: "creole seasoning", id: 1002031 },
  { ingredients: "crisp rice cereal", id: 8066 },
  { ingredients: "croutons", id: 18242 },
  { ingredients: "crystallized ginger", id: 93751 },
  { ingredients: "cucumber", id: 11206 },
  { ingredients: "cumin seeds", id: 2014 },
  { ingredients: "cup cake", id: 18139 },
  { ingredients: "currants", id: 9085 },
  { ingredients: "curry leaves", id: 93604 },
  { ingredients: "dairy free milk", id: 10016223 },
  { ingredients: "dark brown sugar", id: 10019334 },
  { ingredients: "dark chocolate", id: 19904 },
  { ingredients: "dark chocolate candy bars", id: 10019904 },
  { ingredients: "dark chocolate chips", id: 10019071 },
  { ingredients: "dark sesame oil", id: 1004058 },
  { ingredients: "dates", id: 9087 },
  { ingredients: "deep dish pie crust", id: 18945 },
  { ingredients: "deli ham", id: 10010151 },
  { ingredients: "deli turkey", id: 7259 },
  { ingredients: "dessert oats", id: 8121 },
  { ingredients: "dessert wine", id: 10014057 },
  { ingredients: "diced ham", id: 99186 },
  { ingredients: "diet pop", id: 14146 },
  { ingredients: "dijon mustard", id: 1002046 },
  { ingredients: "dill", id: 2045 },
  { ingredients: "dill pickles", id: 10011937 },
  { ingredients: "hot dog", id: 21118 },
  { ingredients: "double cream", id: 1011053 },
  { ingredients: "dried apricots", id: 9032 },
  { ingredients: "dried basil", id: 2003 },
  { ingredients: "dried cherries", id: 93822 },
  { ingredients: "dried chorizo", id: 99233 },
  { ingredients: "dried cranberries", id: 9079 },
  { ingredients: "dried dill", id: 2017 },
  { ingredients: "dried onion", id: 11284 },
  { ingredients: "dried porcini mushrooms", id: 10011268 },
  { ingredients: "dried rubbed sage", id: 1002038 },
  { ingredients: "dried thyme", id: 2042 },
  { ingredients: "dried tomatoes", id: 11955 },
  { ingredients: "dry bread crumbs", id: 18079 },
  { ingredients: "dry milk", id: 1090 },
  { ingredients: "dry mustard", id: 1002024 },
  { ingredients: "dry red wine", id: 14097 },
  { ingredients: "dry roasted peanuts", id: 16090 },
  { ingredients: "duck fat", id: 4574 },
  { ingredients: "dutch process cocoa powder", id: 10019165 },
  { ingredients: "edamame", id: 11212 },
  { ingredients: "egg substitute", id: 1226 },
  { ingredients: "egg vermicelli", id: 20409 },
  { ingredients: "egg whites", id: 1124 },
  { ingredients: "egg yolk", id: 1125 },
  { ingredients: "eggnog", id: 1057 },
  { ingredients: "eggplant", id: 11209 },
  { ingredients: "elbow macaroni", id: 10120499 },
  { ingredients: "enchilada sauce", id: 6599 },
  { ingredients: "english cucumber", id: 10111205 },
  { ingredients: "english muffin", id: 18439 },
  { ingredients: "erythritol", id: 98887 },
  { ingredients: "escarole", id: 11213 },
  { ingredients: "espresso", id: 14210 },
  { ingredients: "evaporated milk", id: 1214 },
  { ingredients: "extra firm tofu", id: 16163 },
  { ingredients: "extra virgin olive oil", id: 1034053 },
  { ingredients: "farfalle", id: 10120420 },
  { ingredients: "farro", id: 10020005 },
  { ingredients: "fat free mayo", id: 42193 },
  { ingredients: "fat-free less-sodium chicken broth", id: 6984 },
  { ingredients: "fennel", id: 11957 },
  { ingredients: "fennel seeds", id: 2018 },
  { ingredients: "fenugreek leaf", id: 98963 },
  { ingredients: "fenugreek seeds", id: 2019 },
  { ingredients: "feta cheese", id: 1019 },
  { ingredients: "fettuccine", id: 10020409 },
  { ingredients: "fire roasted tomatoes", id: 98849 },
  { ingredients: "fish", id: 10115261 },
  { ingredients: "fish sauce", id: 6179 },
  { ingredients: "fish stock", id: 6963 },
  { ingredients: "flank steak", id: 23657 },
  { ingredients: "flax seeds", id: 10012220 },
  { ingredients: "fleur de sel", id: 1022047 },
  { ingredients: "flour", id: 20081 },
  { ingredients: "flour tortillas", id: 10218364 },
  { ingredients: "fontina cheese", id: 1020 },
  { ingredients: "food dye", id: 10711111 },
  { ingredients: "frank's redhot sauce", id: 98878 },
  { ingredients: "free range eggs", id: 1123 },
  { ingredients: "french bread", id: 18029 },
  { ingredients: "fresh basil", id: 2044 },
  { ingredients: "fresh bean sprouts", id: 11043 },
  { ingredients: "fresh chives", id: 11156 },
  { ingredients: "fresh corn", id: 11167 },
  { ingredients: "fresh corn kernels", id: 10011167 },
  { ingredients: "fresh figs", id: 9089 },
  { ingredients: "fresh fruit", id: 9431 },
  { ingredients: "fresh herbs", id: 10111297 },
  { ingredients: "fresh mint", id: 2064 },
  { ingredients: "fresh mozzarella", id: 1026 },
  { ingredients: "fresh rosemary", id: 2063 },
  { ingredients: "fresh thyme leaves", id: 2049 },
  { ingredients: "fried onions", id: 93709 },
  { ingredients: "frosting", id: 19230 },
  { ingredients: "froyo bars", id: 93629 },
  { ingredients: "frozen corn", id: 11913 },
  { ingredients: "frozen spinach", id: 11463 },
  { ingredients: "fudge", id: 19100 },
  { ingredients: "fudge topping", id: 10019348 },
  { ingredients: "fun size almond joy bar", id: 19065 },
  { ingredients: "garam masala", id: 93663 },
  { ingredients: "garbanzo bean flour", id: 16157 },
  { ingredients: "garlic", id: 11215 },
  { ingredients: "garlic paste", id: 10111215 },
  { ingredients: "garlic powder", id: 1022020 },
  { ingredients: "garlic powder", id: 2020 },
  { ingredients: "garlic salt", id: 1062047 },
  { ingredients: "gelatin", id: 19177 },
  { ingredients: "gf chocolate cake mix", id: 99040 },
  { ingredients: "gin", id: 10514037 },
  { ingredients: "ginger", id: 11216 },
  { ingredients: "ginger ale", id: 14136 },
  { ingredients: "ginger paste", id: 93754 },
  { ingredients: "ginger-garlic paste", id: 10093754 },
  { ingredients: "gingersnap cookies", id: 18172 },
  { ingredients: "gnocchi", id: 98853 },
  { ingredients: "goat cheese", id: 1159 },
  { ingredients: "golden raisins", id: 9297 },
  { ingredients: "gorgonzola", id: 1011004 },
  { ingredients: "gouda cheese", id: 1022 },
  { ingredients: "graham cracker crumbs", id: 10018617 },
  { ingredients: "graham cracker pie crust", id: 18942 },
  { ingredients: "graham crackers", id: 18617 },
  { ingredients: "grain blend", id: 10020088 },
  { ingredients: "grand marnier", id: 10314534 },
  { ingredients: "granny smith apples", id: 1089003 },
  { ingredients: "granola", id: 8212 },
  { ingredients: "granulated garlic", id: 1002020 },
  { ingredients: "grape tomatoes", id: 10111529 },
  { ingredients: "grapefruit", id: 9112 },
  { ingredients: "grapeseed oil", id: 4517 },
  { ingredients: "gravy", id: 6997 },
  { ingredients: "great northern beans", id: 16025 },
  { ingredients: "greek yogurt", id: 1256 },
  { ingredients: "green beans", id: 11052 },
  { ingredients: "green bell pepper", id: 11333 },
  { ingredients: "green chili pepper", id: 31015 },
  { ingredients: "green food coloring", id: 1441111 },
  { ingredients: "green grapes", id: 1019132 },
  { ingredients: "green olives", id: 1029195 },
  { ingredients: "green onions", id: 11291 },
  { ingredients: "greens", id: 21052 },
  { ingredients: "grill cheese", id: 10093624 },
  { ingredients: "grill seasoning", id: 1022034 },
  { ingredients: "ground allspice", id: 2001 },
  { ingredients: "ground ancho chili", id: 1022009 },
  { ingredients: "ground beef", id: 10023572 },
  { ingredients: "ground chicken", id: 5332 },
  { ingredients: "ground chipotle chile pepper", id: 1052009 },
  { ingredients: "ground cinnamon", id: 1012010 },
  { ingredients: "ground cinnamon", id: 2010 },
  { ingredients: "ground cloves", id: 2011 },
  { ingredients: "ground coriander seeds", id: 1002013 },
  { ingredients: "ground cumin", id: 1002014 },
  { ingredients: "ground flaxseed", id: 12220 },
  { ingredients: "ground ginger", id: 2021 },
  { ingredients: "ground lamb", id: 17224 },
  { ingredients: "ground mace", id: 2022 },
  { ingredients: "ground nutmeg", id: 2025 },
  { ingredients: "ground pork", id: 10219 },
  { ingredients: "ground pork sausage", id: 7063 },
  { ingredients: "ground veal", id: 17142 },
  { ingredients: "gruyere", id: 1023 },
  { ingredients: "guacamole", id: 1009037 },
  { ingredients: "half n half", id: 1049 },
  { ingredients: "halibut fillet", id: 15036 },
  { ingredients: "ham", id: 10151 },
  { ingredients: "hamburger buns", id: 18350 },
  { ingredients: "hard cooked eggs", id: 1129 },
  { ingredients: "harissa", id: 1006972 },
  { ingredients: "hash brown potatoes", id: 11390 },
  { ingredients: "hazelnuts", id: 12120 },
  { ingredients: "healthy request cream of celery soup", id: 6987 },
  { ingredients: "hemp seeds", id: 93602 },
  { ingredients: "herbes de provence", id: 1012042 },
  { ingredients: "herbs", id: 1002044 },
  { ingredients: "hershey's kisses brand milk chocolates", id: 93743 },
  { ingredients: "hoisin sauce", id: 6175 },
  { ingredients: "honey mustard", id: 99227 },
  { ingredients: "horseradish", id: 1002055 },
  { ingredients: "hot sauce", id: 6168 },
  { ingredients: "hummus", id: 16158 },
  { ingredients: "ice", id: 10014412 },
  { ingredients: "ice cream", id: 19095 },
  { ingredients: "instant chocolate pudding mix", id: 19184 },
  { ingredients: "instant coffee powder", id: 14214 },
  { ingredients: "instant espresso powder", id: 10014214 },
  { ingredients: "instant lemon pudding mix", id: 19332 },
  { ingredients: "instant yeast", id: 10118375 },
  { ingredients: "irish cream", id: 93764 },
  { ingredients: "italian bread", id: 10028033 },
  { ingredients: "italian cheese blend", id: 93651 },
  { ingredients: "italian sausages", id: 7036 },
  { ingredients: "italian seasoning", id: 1022027 },
  { ingredients: "jaggery", id: 99002 },
  { ingredients: "jalapeno", id: 11979 },
  { ingredients: "jasmine rice", id: 10120444 },
  { ingredients: "jelly", id: 19297 },
  { ingredients: "jicama", id: 11603 },
  { ingredients: "jimmies", id: 93645 },
  { ingredients: "juice", id: 1019016 },
  { ingredients: "jumbo shell pasta", id: 10520420 },
  { ingredients: "kaffir lime leaves", id: 93633 },
  { ingredients: "kahlua", id: 93716 },
  { ingredients: "kalamata olives", id: 1009195 },
  { ingredients: "kale", id: 11233 },
  { ingredients: "ketchup", id: 11935 },
  { ingredients: "kitchen bouquet", id: 93768 },
  { ingredients: "kiwis", id: 9148 },
  { ingredients: "kosher salt", id: 1082047 },
  { ingredients: "ladyfingers", id: 18423 },
  { ingredients: "lamb", id: 10017224 },
  { ingredients: "lasagna noodles", id: 10620420 },
  { ingredients: "lb cake", id: 18133 },
  { ingredients: "lean ground beef", id: 23557 },
  { ingredients: "lean ground turkey", id: 5662 },
  { ingredients: "lean pork tenderloin", id: 10060 },
  { ingredients: "leeks", id: 11246 },
  { ingredients: "leg of lamb", id: 17013 },
  { ingredients: "lemon", id: 9150 },
  { ingredients: "lemon curd", id: 93834 },
  { ingredients: "lemon extract", id: 12311111 },
  { ingredients: "lemon juice", id: 9152 },
  { ingredients: "lemon peel", id: 9156 },
  { ingredients: "lemon pepper", id: 1012030 },
  { ingredients: "lemon wedges", id: 1029150 },
  { ingredients: "lemongrass", id: 11972 },
  { ingredients: "lettuce", id: 11252 },
  { ingredients: "lettuce leaves", id: 93623 },
  { ingredients: "light butter", id: 4602 },
  { ingredients: "light coconut milk", id: 99009 },
  { ingredients: "light corn syrup", id: 19350 },
  { ingredients: "light cream cheese", id: 43274 },
  { ingredients: "light mayonnaise", id: 4641 },
  { ingredients: "light olive oil", id: 1054053 },
  { ingredients: "light soy sauce", id: 10216124 },
  { ingredients: "lime", id: 9159 },
  { ingredients: "lime juice", id: 9160 },
  { ingredients: "lime wedges", id: 1029159 },
  { ingredients: "lime zest", id: 1009159 },
  { ingredients: "linguine", id: 10720420 },
  { ingredients: "liquid smoke", id: 93627 },
  { ingredients: "liquid stevia", id: 10811111 },
  { ingredients: "liquor", id: 14037 },
  { ingredients: "live lobster", id: 15147 },
  { ingredients: "long-grain rice", id: 10220444 },
  { ingredients: "low fat buttermilk", id: 1088 },
  { ingredients: "low fat milk", id: 1082 },
  { ingredients: "low fat milk", id: 1174 },
  { ingredients: "low fat plain yogurt", id: 1117 },
  { ingredients: "low fat ricotta cheese", id: 1037 },
  { ingredients: "low fat sour cream", id: 1179 },
  { ingredients: "low sodium chicken broth", id: 6970 },
  { ingredients: "low sodium soy sauce", id: 16424 },
  { ingredients: "low-sodium chicken stock", id: 1006970 },
  { ingredients: "lower sodium beef broth", id: 10093741 },
  { ingredients: "lump crab", id: 10115136 },
  { ingredients: "m&m candies", id: 19157 },
  { ingredients: "macadamia nuts", id: 12131 },
  { ingredients: "macaroni and cheese mix", id: 32004 },
  { ingredients: "madras curry powder", id: 2015 },
  { ingredients: "malt drink mix", id: 14311 },
  { ingredients: "mandarin orange sections", id: 9383 },
  { ingredients: "mandarin oranges", id: 9218 },
  { ingredients: "mango", id: 9176 },
  { ingredients: "maple syrup", id: 19911 },
  { ingredients: "maraschino cherries", id: 9328 },
  { ingredients: "margarine", id: 4073 },
  { ingredients: "marinara sauce", id: 10111549 },
  { ingredients: "marjoram", id: 2023 },
  { ingredients: "marsala wine", id: 14057 },
  { ingredients: "marshmallow fluff", id: 93644 },
  { ingredients: "marshmallows", id: 19116 },
  { ingredients: "masa harina", id: 20317 },
  { ingredients: "mascarpone", id: 93820 },
  { ingredients: "mat beans", id: 99144 },
  { ingredients: "matcha tea", id: 98932 },
  { ingredients: "mayonnaise", id: 4025 },
  { ingredients: "meat", id: 1015006 },
  { ingredients: "meat", id: 1065062 },
  { ingredients: "meatballs", id: 10110219 },
  { ingredients: "medjool dates", id: 9421 },
  { ingredients: "mexican cream", id: 93772 },
  { ingredients: "meyer lemon juice", id: 1009152 },
  { ingredients: "milk", id: 1077 },
  { ingredients: "milk chocolate chips", id: 10019146 },
  { ingredients: "mint chutney", id: 98991 },
  { ingredients: "minute rice", id: 20048 },
  { ingredients: "miracle whip", id: 4014 },
  { ingredients: "mirin", id: 93830 },
  { ingredients: "miso", id: 16112 },
  { ingredients: "molasses", id: 19304 },
  { ingredients: "monterey jack cheese", id: 1001025 },
  { ingredients: "mushroom", id: 11260 },
  { ingredients: "mussels", id: 15164 },
  { ingredients: "mustard", id: 2046 },
  { ingredients: "mustard seeds", id: 2024 },
  { ingredients: "napa cabbage", id: 11119 },
  { ingredients: "navel oranges", id: 9202 },
  { ingredients: "nectarine", id: 9191 },
  { ingredients: "new potatoes", id: 11352 },
  { ingredients: "non-fat greek yogurt", id: 1011256 },
  { ingredients: "nonfat cool whip", id: 1200 },
  { ingredients: "nonfat milk", id: 1085 },
  { ingredients: "nori", id: 11446 },
  { ingredients: "nut butter", id: 12195 },
  { ingredients: "nut meal", id: 93620 },
  { ingredients: "nutella", id: 19125 },
  { ingredients: "nutritional yeast", id: 93690 },
  { ingredients: "oat flour", id: 20132 },
  { ingredients: "oats", id: 8120 },
  { ingredients: "oil", id: 4582 },
  { ingredients: "oil packed sun dried tomatoes", id: 11956 },
  { ingredients: "okra", id: 11278 },
  { ingredients: "old bay seasoning", id: 1052034 },
  { ingredients: "olive oil", id: 4053 },
  { ingredients: "olives", id: 9195 },
  { ingredients: "onion", id: 11282 },
  { ingredients: "onion powder", id: 2026 },
  { ingredients: "onion soup mix", id: 6094 },
  { ingredients: "orange", id: 9200 },
  { ingredients: "orange bell pepper", id: 10011821 },
  { ingredients: "orange juice", id: 9206 },
  { ingredients: "orange juice concentrate", id: 9214 },
  { ingredients: "orange liqueur", id: 10414534 },
  { ingredients: "orange marmalade", id: 19303 },
  { ingredients: "orange oil", id: 12511111 },
  { ingredients: "orange zest", id: 9216 },
  { ingredients: "oregano", id: 2027 },
  { ingredients: "oreo cookies", id: 10018166 },
  { ingredients: "orzo", id: 10920420 },
  { ingredients: "oyster sauce", id: 6176 },
  { ingredients: "oysters", id: 15167 },
  { ingredients: "palm sugar", id: 93831 },
  { ingredients: "pancetta", id: 10410123 },
  { ingredients: "paneer", id: 98847 },
  { ingredients: "panko", id: 10018079 },
  { ingredients: "papaya", id: 9226 },
  { ingredients: "paprika", id: 2028 },
  { ingredients: "parmigiano reggiano", id: 1033 },
  { ingredients: "parsley", id: 11297 },
  { ingredients: "parsley flakes", id: 2029 },
  { ingredients: "parsnip", id: 11298 },
  { ingredients: "part-skim mozzarella cheese", id: 1028 },
  { ingredients: "pasta", id: 20420 },
  { ingredients: "pasta salad mix", id: 99036 },
  { ingredients: "pasta sauce", id: 10011549 },
  { ingredients: "pastry flour", id: 10020080 },
  { ingredients: "peach", id: 9236 },
  { ingredients: "peanut butter", id: 16098 },
  { ingredients: "peanut butter chips", id: 93762 },
  { ingredients: "peanut butter cups", id: 19150 },
  { ingredients: "peanut oil", id: 4042 },
  { ingredients: "peanuts", id: 16091 },
  { ingredients: "pear liqueur", id: 98988 },
  { ingredients: "pearl barley", id: 20005 },
  { ingredients: "pearl onions", id: 10111282 },
  { ingredients: "peas", id: 11304 },
  { ingredients: "pecan", id: 12142 },
  { ingredients: "pecan pieces", id: 10012142 },
  { ingredients: "pecorino", id: 1038 },
  { ingredients: "penne", id: 11120420 },
  { ingredients: "peperoncino", id: 11976 },
  { ingredients: "pepper jack cheese", id: 1025 },
  { ingredients: "peppercorns", id: 1022030 },
  { ingredients: "peppermint baking chips", id: 98858 },
  { ingredients: "peppermint extract", id: 1022050 },
  { ingredients: "pepperoni", id: 7057 },
  { ingredients: "peppers", id: 10111333 },
  { ingredients: "pesto", id: 93698 },
  { ingredients: "pickle relish", id: 11944 },
  { ingredients: "pickles", id: 11937 },
  { ingredients: "pico de gallo", id: 27027 },
  { ingredients: "pie crust", id: 18334 },
  { ingredients: "pimento stuffed olives", id: 1049195 },
  { ingredients: "pimientos", id: 11943 },
  { ingredients: "pine nuts", id: 12147 },
  { ingredients: "pineapple", id: 9266 },
  { ingredients: "pineapple chunks", id: 1029354 },
  { ingredients: "pineapple in juice", id: 9354 },
  { ingredients: "pineapple juice", id: 9273 },
  { ingredients: "pink himalayan salt", id: 1032047 },
  { ingredients: "pinto beans", id: 16043 },
  { ingredients: "pistachios", id: 12151 },
  { ingredients: "pita", id: 18413 },
  { ingredients: "pizza crust", id: 93770 },
  { ingredients: "pizza mix", id: 98924 },
  { ingredients: "plain greek yogurt", id: 1001256 },
  { ingredients: "plain nonfat yogurt", id: 1118 },
  { ingredients: "plain yogurt", id: 1001116 },
  { ingredients: "plantain", id: 9277 },
  { ingredients: "plum", id: 9279 },
  { ingredients: "plum tomatoes", id: 10411529 },
  { ingredients: "poblano peppers", id: 10011333 },
  { ingredients: "polenta", id: 10035137 },
  { ingredients: "polish sausage", id: 7059 },
  { ingredients: "pomegranate juice", id: 9442 },
  { ingredients: "pomegranate molasses", id: 10042040 },
  { ingredients: "pomegranate seeds", id: 9286 },
  { ingredients: "popcorn", id: 19034 },
  { ingredients: "poppy seeds", id: 2033 },
  { ingredients: "pork", id: 10010219 },
  { ingredients: "Pork & Beans", id: 16009 },
  { ingredients: "pork belly", id: 10005 },
  { ingredients: "pork butt", id: 10084 },
  { ingredients: "pork chops", id: 10010062 },
  { ingredients: "pork links", id: 1007063 },
  { ingredients: "pork loin chops", id: 10062 },
  { ingredients: "pork loin roast", id: 10225 },
  { ingredients: "pork roast", id: 10010225 },
  { ingredients: "pork shoulder", id: 10072 },
  { ingredients: "pork tenderloin", id: 10218 },
  { ingredients: "port", id: 10114057 },
  { ingredients: "portabella mushrooms", id: 11265 },
  { ingredients: "pot roast", id: 23612 },
  { ingredients: "potato chips", id: 19411 },
  { ingredients: "potato starch", id: 11413 },
  { ingredients: "potatoes", id: 11362 },
  { ingredients: "poultry seasoning", id: 2034 },
  { ingredients: "powdered sugar", id: 19336 },
  { ingredients: "pretzel sandwiches", id: 19047 },
  { ingredients: "processed american cheese", id: 1253 },
  { ingredients: "prosciutto", id: 10010123 },
  { ingredients: "provolone cheese", id: 1035 },
  { ingredients: "prunes", id: 9291 },
  { ingredients: "puff pastry", id: 18337 },
  { ingredients: "pumpkin", id: 11422 },
  { ingredients: "pumpkin pie filling", id: 11426 },
  { ingredients: "pumpkin pie spice", id: 1002035 },
  { ingredients: "pumpkin puree", id: 11424 },
  { ingredients: "pumpkin seeds", id: 12014 },
  { ingredients: "queso fresco", id: 1228 },
  { ingredients: "quick cooking oats", id: 8402 },
  { ingredients: "quinoa", id: 20035 },
  { ingredients: "quinoa flour", id: 93773 },
  { ingredients: "radicchio", id: 11952 },
  { ingredients: "radishes", id: 11429 },
  { ingredients: "raisins", id: 9299 },
  { ingredients: "rajma masala", id: 10193663 },
  { ingredients: "ramen noodles", id: 6583 },
  { ingredients: "ranch dressing", id: 4639 },
  { ingredients: "ranch dressing mix", id: 93733 },
  { ingredients: "raspberries", id: 9302 },
  { ingredients: "raspberry jam", id: 10719297 },
  { ingredients: "raw cashews", id: 12087 },
  { ingredients: "raw shrimp", id: 15152 },
  { ingredients: "ready-to-serve Asian fried rice", id: 93721 },
  { ingredients: "real bacon recipe pieces", id: 99229 },
  { ingredients: "red apples", id: 1079003 },
  { ingredients: "red bell peppers", id: 11821 },
  { ingredients: "red cabbage", id: 11112 },
  { ingredients: "red chilli", id: 11819 },
  { ingredients: "red delicious apples", id: 1059003 },
  { ingredients: "red food coloring", id: 1451111 },
  { ingredients: "red grapefruit juice", id: 98926 },
  { ingredients: "red grapes", id: 9132 },
  { ingredients: "red kidney beans", id: 16033 },
  { ingredients: "red lentils", id: 10016069 },
  { ingredients: "red onion", id: 10011282 },
  { ingredients: "red pepper flakes", id: 1032009 },
  { ingredients: "red pepper powder", id: 2031 },
  { ingredients: "red potatoes", id: 10011355 },
  { ingredients: "red velvet cookie", id: 18157 },
  { ingredients: "red wine", id: 14096 },
  { ingredients: "red wine vinegar", id: 1022068 },
  { ingredients: "reduced fat shredded cheddar cheese", id: 1001168 },
  { ingredients: "refried beans", id: 16202 },
  { ingredients: "refrigerated crescent rolls", id: 93618 },
  { ingredients: "refrigerated pizza dough", id: 93610 },
  { ingredients: "refrigerated sugar cookie dough", id: 18205 },
  { ingredients: "rhubarb", id: 9307 },
  { ingredients: "rib tips", id: 98937 },
  { ingredients: "rice", id: 20444 },
  { ingredients: "rice flour", id: 20061 },
  { ingredients: "rice krispies cereal", id: 8065 },
  { ingredients: "rice milk", id: 93761 },
  { ingredients: "rice noodles", id: 20133 },
  { ingredients: "rice paper", id: 10118368 },
  { ingredients: "rice syrup", id: 93784 },
  { ingredients: "rice vinegar", id: 1022053 },
  { ingredients: "rice wine", id: 43479 },
  { ingredients: "ricotta salata", id: 1036 },
  { ingredients: "ritz crackers", id: 18621 },
  { ingredients: "roast beef", id: 93713 },
  { ingredients: "roasted chicken", id: 5114 },
  { ingredients: "roasted nuts", id: 12135 },
  { ingredients: "roasted peanuts", id: 16092 },
  { ingredients: "roasted red peppers", id: 11916 },
  { ingredients: "roma tomatoes", id: 10211529 },
  { ingredients: "romaine lettuce", id: 10111251 },
  { ingredients: "root vegetables", id: 10011298 },
  { ingredients: "rosemary", id: 2036 },
  { ingredients: "rotini pasta", id: 11320420 },
  { ingredients: "rotisserie chicken", id: 5348 },
  { ingredients: "round steak", id: 23617 },
  { ingredients: "rub", id: 1012034 },
  { ingredients: "rum extract", id: 12211111 },
  { ingredients: "runny honey", id: 19296 },
  { ingredients: "russet potatoes", id: 11353 },
  { ingredients: "rutabaga", id: 11435 },
  { ingredients: "rye bread", id: 18060 },
  { ingredients: "rye meal", id: 98905 },
  { ingredients: "saffron threads", id: 2037 },
  { ingredients: "sage", id: 2038 },
  { ingredients: "sage leaves", id: 99226 },
  { ingredients: "salad dressing", id: 4114 },
  { ingredients: "salami", id: 7071 },
  { ingredients: "salmon fillet", id: 15076 },
  { ingredients: "salsa", id: 6164 },
  { ingredients: "salsa verde", id: 27028 },
  { ingredients: "salt", id: 2047 },
  { ingredients: "salt and pepper", id: 1102047 },
  { ingredients: "salted butter", id: 1001001 },
  { ingredients: "saltine crackers", id: 18228 },
  { ingredients: "sandwich bun", id: 18353 },
  { ingredients: "sauerkraut", id: 11439 },
  { ingredients: "sausage", id: 1017063 },
  { ingredients: "sausage links", id: 1037063 },
  { ingredients: "scotch bonnet chili", id: 10011819 },
  { ingredients: "sea salt", id: 1012047 },
  { ingredients: "sea scallops", id: 10015172 },
  { ingredients: "seasoned bread crumbs", id: 18376 },
  { ingredients: "seasoned rice vinegar", id: 1032053 },
  { ingredients: "seasoned salt", id: 1042047 },
  { ingredients: "seasoning", id: 1042027 },
  { ingredients: "seasoning blend", id: 1032027 },
  { ingredients: "seeds", id: 93818 },
  { ingredients: "self-rising flour", id: 20129 },
  { ingredients: "semi sweet chocolate chips", id: 10019903 },
  { ingredients: "serrano chile", id: 11977 },
  { ingredients: "sesame oil", id: 4058 },
  { ingredients: "sesame seed hamburger buns", id: 10018350 },
  { ingredients: "sesame seeds", id: 12023 },
  { ingredients: "shallot", id: 11677 },
  { ingredients: "sharp cheddar cheese", id: 1031009 },
  { ingredients: "sheeps milk cheese", id: 1011019 },
  { ingredients: "shells", id: 11020420 },
  { ingredients: "sherry", id: 10114106 },
  { ingredients: "sherry", id: 10214106 },
  { ingredients: "sherry vinegar", id: 1012068 },
  { ingredients: "shiitake mushroom caps", id: 11238 },
  { ingredients: "short grain rice", id: 10120052 },
  { ingredients: "short pasta", id: 20499 },
  { ingredients: "short ribs", id: 10013149 },
  { ingredients: "shortbread cookies", id: 18192 },
  { ingredients: "shortcrust pastry", id: 10018338 },
  { ingredients: "shortening", id: 4615 },
  { ingredients: "shredded cheddar cheese", id: 1001009 },
  { ingredients: "shredded cheese", id: 1011026 },
  { ingredients: "shredded chicken", id: 1005114 },
  { ingredients: "shredded coconut", id: 12108 },
  { ingredients: "shredded mexican cheese blend", id: 1001251 },
  { ingredients: "shredded mexican cheese blend", id: 1251 },
  { ingredients: "shredded mozzarella", id: 1001026 },
  { ingredients: "silken tofu", id: 16161 },
  { ingredients: "sirloin steak", id: 23625 },
  { ingredients: "skim milk ricotta", id: 93630 },
  { ingredients: "skim vanilla greek yogurt", id: 99033 },
  { ingredients: "skin-on bone-in chicken leg quarters", id: 1005091 },
  { ingredients: "skinless boneless chicken breast halves", id: 1045062 },
  { ingredients: "skinless boneless chicken thighs", id: 5096 },
  { ingredients: "skinned black gram", id: 93718 },
  { ingredients: "slaw dressing", id: 43016 },
  { ingredients: "slaw mix", id: 10011109 },
  { ingredients: "slivered almonds", id: 10012061 },
  { ingredients: "smoked paprika", id: 1012028 },
  { ingredients: "smoked salmon", id: 15077 },
  { ingredients: "smoked sausage", id: 7916 },
  { ingredients: "smooth peanut butter", id: 16150 },
  { ingredients: "snapper fillets", id: 15101 },
  { ingredients: "snow peas", id: 11300 },
  { ingredients: "soda water", id: 14121 },
  { ingredients: "sour cream", id: 1056 },
  { ingredients: "sourdough bowl", id: 99169 },
  { ingredients: "sourdough bread", id: 10118029 },
  { ingredients: "soy milk", id: 16223 },
  { ingredients: "soy protein powder", id: 16122 },
  { ingredients: "soy sauce", id: 16124 },
  { ingredients: "spaghetti", id: 11420420 },
  { ingredients: "spaghetti squash", id: 11492 },
  { ingredients: "sparkling wine", id: 43155 },
  { ingredients: "spelt flour", id: 93823 },
  { ingredients: "spicy brown mustard", id: 1022046 },
  { ingredients: "spinach", id: 10011457 },
  { ingredients: "sprite", id: 14144 },
  { ingredients: "sprouts", id: 11001 },
  { ingredients: "squash", id: 10011485 },
  { ingredients: "sriracha sauce", id: 1016168 },
  { ingredients: "steaks", id: 23232 },
  { ingredients: "steel cut oats", id: 93695 },
  { ingredients: "stevia", id: 93628 },
  { ingredients: "stew meat", id: 10023618 },
  { ingredients: "stew vegetables", id: 11583 },
  { ingredients: "stock", id: 1006615 },
  { ingredients: "store-bought phyllo", id: 18338 },
  { ingredients: "stout", id: 93619 },
  { ingredients: "strawberries", id: 9316 },
  { ingredients: "strawberry jam", id: 10819297 },
  { ingredients: "strawberry jello", id: 10219172 },
  { ingredients: "stuffing", id: 18082 },
  { ingredients: "stuffing mix", id: 18081 },
  { ingredients: "sub rolls", id: 98940 },
  { ingredients: "sugar", id: 19335 },
  { ingredients: "sugar snap peas", id: 10011300 },
  { ingredients: "sugar syrup", id: 90480 },
  { ingredients: "sukrin sweetener", id: 99190 },
  { ingredients: "summer savory", id: 98961 },
  { ingredients: "summer squash", id: 11641 },
  { ingredients: "sunflower oil", id: 4584 },
  { ingredients: "sunflower seeds", id: 12036 },
  { ingredients: "sweet chilli sauce", id: 98962 },
  { ingredients: "sweet onion", id: 11294 },
  { ingredients: "sweet paprika", id: 1002028 },
  { ingredients: "sweet pickle juice", id: 93640 },
  { ingredients: "sweet pickle relish", id: 11945 },
  { ingredients: "sweet potato", id: 11507 },
  { ingredients: "sweet tea", id: 14355 },
  { ingredients: "sweetened coconut", id: 12109 },
  { ingredients: "sweetened condensed milk", id: 1095 },
  { ingredients: "sweetened shredded coconut", id: 12179 },
  { ingredients: "swiss chard", id: 11147 },
  { ingredients: "swiss cheese", id: 1040 },
  { ingredients: "taco seasoning mix", id: 2073 },
  { ingredients: "taco shells", id: 18360 },
  { ingredients: "tahini", id: 12698 },
  { ingredients: "tamari", id: 10116124 },
  { ingredients: "tapioca flour", id: 93696 },
  { ingredients: "tarragon", id: 2041 },
  { ingredients: "tart apple", id: 1029003 },
  { ingredients: "tea bags", id: 10111111 },
  { ingredients: "tequila", id: 10814037 },
  { ingredients: "teriyaki sauce", id: 6112 },
  { ingredients: "thai basil", id: 1012044 },
  { ingredients: "thai chiles", id: 11670 },
  { ingredients: "thai red curry paste", id: 93605 },
  { ingredients: "thick-cut bacon", id: 10310123 },
  { ingredients: "tilapia fillets", id: 15261 },
  { ingredients: "toast", id: 18070 },
  { ingredients: "toffee bits", id: 19383 },
  { ingredients: "tofu", id: 16213 },
  { ingredients: "tomatillos", id: 11954 },
  { ingredients: "tomato juice", id: 11886 },
  { ingredients: "tomato paste", id: 11887 },
  { ingredients: "tomato puree", id: 11547 },
  { ingredients: "tomato sauce", id: 11549 },
  { ingredients: "tomato soup", id: 6159 },
  { ingredients: "tomatoes", id: 11529 },
  { ingredients: "top blade steak", id: 13523 },
  { ingredients: "top round steak", id: 23636 },
  { ingredients: "Top Sirloin", id: 23584 },
  { ingredients: "tortilla", id: 18364 },
  { ingredients: "tortilla chips", id: 19056 },
  { ingredients: "triple sec", id: 14534 },
  { ingredients: "truffle oil", id: 1024053 },
  { ingredients: "tuna", id: 10015121 },
  { ingredients: "turbinado sugar", id: 19908 },
  { ingredients: "turkey", id: 5165 },
  { ingredients: "turkey breast", id: 5696 },
  { ingredients: "turkey kielbasa", id: 7955 },
  { ingredients: "turmeric", id: 2043 },
  { ingredients: "turnips", id: 11564 },
  { ingredients: "unbleached flour", id: 10020081 },
  { ingredients: "unsalted butter", id: 1145 },
  { ingredients: "unsmoked back bacon", id: 10130 },
  { ingredients: "unsweetened applesauce", id: 9019 },
  { ingredients: "unsweetened coconut milk", id: 12117 },
  { ingredients: "unsweetened shredded coconut", id: 10012108 },
  { ingredients: "vanilla bean", id: 93622 },
  { ingredients: "vanilla bean paste", id: 93813 },
  { ingredients: "vanilla essence", id: 1012050 },
  { ingredients: "vanilla extract", id: 2050 },
  { ingredients: "vanilla frosting", id: 10019230 },
  { ingredients: "vanilla instant pudding mix", id: 19206 },
  { ingredients: "vanilla protein powder", id: 99076 },
  { ingredients: "vanilla wafers", id: 18609 },
  { ingredients: "vanilla yogurt", id: 1119 },
  { ingredients: "vegan cheese", id: 93701 },
  { ingredients: "vegan chocolate chips", id: 98848 },
  { ingredients: "vegan margarine", id: 4673 },
  { ingredients: "vegetable broth", id: 6615 },
  { ingredients: "vegetable oil", id: 4513 },
  { ingredients: "vegetarian bacon", id: 16542 },
  { ingredients: "vermouth", id: 14132 },
  { ingredients: "vinaigrette", id: 4135 },
  { ingredients: "vinegar", id: 2053 },
  { ingredients: "vodka", id: 14051 },
  { ingredients: "walnuts", id: 12155 },
  { ingredients: "water", id: 14412 },
  { ingredients: "water chestnuts", id: 11590 },
  { ingredients: "water-packed tuna", id: 15121 },
  { ingredients: "watercress", id: 11591 },
  { ingredients: "watermelon chunks", id: 9326 },
  { ingredients: "wheat bran", id: 20077 },
  { ingredients: "wheat germ", id: 20078 },
  { ingredients: "whipped cream", id: 1054 },
  { ingredients: "whipped topping", id: 42135 },
  { ingredients: "whipping cream", id: 1001053 },
  { ingredients: "whiskey", id: 14052 },
  { ingredients: "white balsamic vinegar", id: 1012069 },
  { ingredients: "white bread", id: 18069 },
  { ingredients: "white cake mix", id: 18137 },
  { ingredients: "white cheddar", id: 1011009 },
  { ingredients: "white chocolate", id: 19087 },
  { ingredients: "white chocolate chips", id: 10019087 },
  { ingredients: "white onion", id: 10611282 },
  { ingredients: "white pepper", id: 2032 },
  { ingredients: "white whole wheat flour", id: 93824 },
  { ingredients: "white wine", id: 14106 },
  { ingredients: "white wine vinegar", id: 1002068 },
  { ingredients: "whole allspice berries", id: 1002001 },
  { ingredients: "whole chicken", id: 5006 },
  { ingredients: "whole coriander seeds", id: 2013 },
  { ingredients: "whole cranberry sauce", id: 9081 },
  { ingredients: "whole kernel corn", id: 11177 },
  { ingredients: "whole star anise", id: 1012002 },
  { ingredients: "whole wheat bread", id: 18075 },
  { ingredients: "whole wheat flour", id: 20080 },
  { ingredients: "whole wheat tortillas", id: 93675 },
  { ingredients: "whole-grain mustard", id: 1012046 },
  { ingredients: "wine", id: 14084 },
  { ingredients: "wine vinegar", id: 2068 },
  { ingredients: "winter squash", id: 10111485 },
  { ingredients: "won ton wraps", id: 10018368 },
  { ingredients: "worcestershire sauce", id: 6971 },
  { ingredients: "wraps", id: 10018364 },
  { ingredients: "xanthan gum", id: 93626 },
  { ingredients: "yeast", id: 18375 },
  { ingredients: "yellow bell pepper", id: 11951 },
  { ingredients: "yellow cake mix", id: 18144 },
  { ingredients: "yellow onion", id: 10511282 },
  { ingredients: "yogurt", id: 1116 },
  { ingredients: "yukon gold potato", id: 10211362 },
     
];

// cuisine options

const topCuisine = [

  { index: 1, cuisine: "African" },
  { index: 2, cuisine: "American" },
  { index: 3, cuisine: "British" },
  { index: 4, cuisine: "Cajun" },
  { index: 5, cuisine: "Caribbean" },
  { index: 6, cuisine: "Chinese" },
  { index: 7, cuisine: "Eastern European" },
  { index: 8, cuisine: "European" },
  { index: 9, cuisine: "French" },
  { index: 10, cuisine: "German" },
  { index: 11, cuisine: "Greek" },
  { index: 12, cuisine: "Indian" },
  { index: 13, cuisine: "Irish" },
  { index: 14, cuisine: "Italian" },
  { index: 15, cuisine: "Japanese" },
  { index: 16, cuisine: "Jewish" },
  { index: 17, cuisine: "Korean" },
  { index: 18, cuisine: "Latin American" },
  { index: 19, cuisine: "Mediterranean" },
  { index: 20, cuisine: "Mexican" },
  { index: 21, cuisine: "Middle Eastern" },
  { index: 22, cuisine: "Nordic" },
  { index: 23, cuisine: "Southern" },
  { index: 24, cuisine: "Spanish" },
  { index: 25, cuisine: "Thai" },
  { index: 26, cuisine: "Vietnamese" },
  
];

// meal type options

const meal = [

  { index: 1, type: "main course" },
  { index: 2, type: "side dish" },
  { index: 3, type: "dessert" },
  { index: 4, type: "appetizer" },
  { index: 5, type: "salad" },
  { index: 6, type: "bread" },
  { index: 7, type: "breakfast" },
  { index: 8, type: "soup" },
  { index: 9, type: "beverage" },
  { index: 10, type: "sauce" },
  { index: 11, type: "marinade" },
  { index: 12, type: "fingerfood" },
  { index: 13, type: "snack" },
  { index: 14, type: "drink" },

];

// intolerances

const intolerances = [

  { index: 1, type: "Dairy" },
  { index: 2, type: "Egg" },
  { index: 3, type: "Gluten" },
  { index: 4, type: "Grain" },
  { index: 5, type: "Peanut" },
  { index: 6, type: "Seafood" },
  { index: 7, type: "Sesame" },
  { index: 8, type: "Shellfish" },
  { index: 9, type: "Soy" },
  { index: 10, type: "Sulfite" },
  { index: 11, type: "Tree Nut" },
  { index: 12, type: "Wheat" },    

];

// diet definitions

const dietDefinition = [

  { type: "Gluten Free", desc: "Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated)." },
  { type: "Ketogenic", desc: "The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates." },
  { type: "Vegetarian", desc: "No ingredients may contain meat or meat by-products, such as bones or gelatin." },
  { type: "Lacto-Vegetarian", desc: "All ingredients must be vegetarian and none of the ingredients can be or contain egg." },
  { type: "Ovo-Vegetarian", desc: "All ingredients must be vegetarian and none of the ingredients can be or contain dairy." },
  { type: "Vegan", desc: "No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey." },
  { type: "Pescetarian", desc: "Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not." },
  { type: "Paleo", desc: "Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods." },
  { type: "Primal", desc: "Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc." },
  { type: "Low FODMAP", desc: "FODMAP stands for 'fermentable oligo-, di-, mono-saccharides and polyols'. Our ontology knows which foods are considered high in these types of carbohydrates (e.g. legumes, wheat, and dairy products)" },
  { type: "Whole30", desc: "Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites." },

];


export default SearchPage;