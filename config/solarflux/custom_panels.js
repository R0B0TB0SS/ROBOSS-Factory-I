/*
* This JavaScript file can be used to initialize your own solar panels.
* First off, all methods have return types (they are specified after the "=>")
* How-to: (or watch the tutorial https://youtu.be/WVr6-3E7lA8 ;3)
* 1. To create a new panel, you need to make a builder, call panel()=>SolarPanelBuilder to begin the builder chain.
* 2. Chain elements:
*    - .name("yourname")=>SolarPanelBuilder // mandatory
*    - .height(float)=>SolarPanelBuilder // optional, float value is between [0;1]
*    - .generation("amount")=>SolarPanelBuilder // mandatory, pass the number as a string
*    - .capacity("amount")=>SolarPanelBuilder // mandatory, pass the number as a string
*    - .transfer("amount")=>SolarPanelBuilder // mandatory, pass the number as a string
* 3. At the end of the chain, call .build()=>SolarPanel (alternatively, .buildAndRegister()=>SolarPanel, to skip step #5)
* 4. Languages: call after build chain end (operate on panel), start language chain with .langBuilder()=>LanguageBuilder
*    - .put("en_us", "Your Solar Panel Name")=>LanguageBuilder
*    After that, call as many lang assigns as you want:
*    - .put("lang", "Your Solar Panel Name")=>LanguageBuilder
*    End chain with .build()=>SolarPanel
* 5. Recipes: call after build chain end (operate on panel), start recipe chain with .recipeBuilder()=>RecipeBuilder
*    - .shape(string...)=>RecipeBuilder // Specify the needed string amount (1 string = 1 row)
*    After you specified the recipe shape, bind all ingredients:
*    - .bind('c', item("modid", "item_name"))=>RecipeBuilder
*    End chain with .build(AMOUNT)=>SolarPanel // AMOUNT is the int value (0;64] of items in the recipe output, if omitted, will be defaulted to 1.
* 6. To register the panel, append .register()=>SolarPanel after ending the chain.
* 7. Texturing: (all textures are stored in "textures" folder)
*      "yourname_base.png", optionally with "yourname_base.mcmeta" (for animations)
*      "yourname_top.png", optionally with "yourname_top.mcmeta" (for animations)
* 
* Additional methods & features:
*   - isModLoaded("modid")=>boolean // returns if the specified mod is loaded. Could be useful for setting up mod-dependent solar panels.
*   - you can have a line "import path.to.Class;"  to avoid using Java.type("path.to.Class") stuff. Created outside of any functions, declares a new variable with the simple class name.
*   - you can have a line "define a_key !value!" to make the compiler replace all a_key with !value! at runtime.
*/

define english "en_us"

var ourMaterial = false;

/** This function is called when mod is being constructed */
function init()
{
	// Example: (textures are extracted in /textures/ by default), uncomment to try it out! (Requires game restart)

    //Comment Start

    // You might need to use CraftTweaker or something else to make the material obtainable!
	photovoltaic_cell_wyvern = newMaterial("photovoltaic_cell_wyvern")
	    .langBuilder()
            .put(english, "Wyvern Photovoltaic Cell")
        .build();

		photovoltaic_cell_draconic = newMaterial("photovoltaic_cell_draconic")
	    .langBuilder()
            .put(english, "Draconic Photovoltaic Cell")
        .build();

		photovoltaic_cell_chaotic = newMaterial("photovoltaic_cell_chaotic")
	    .langBuilder()
            .put(english, "Chaotic Photovoltaic Cell")
        .build();

		photovoltaic_cell_neutronium = newMaterial("photovoltaic_cell_neutronium")
	    .langBuilder()
            .put(english, "Neutronium Photovoltaic Cell")
        .build();

		photovoltaic_cell_infinity = newMaterial("photovoltaic_cell_infinity")
	    .langBuilder()
            .put(english, "Infinity Photovoltaic Cell")
        .build();

	wyvern= panel()
		.name("wyvern")
		.height(6 / 16.0)
		.generation("65536")
		.capacity("256000000")
		.transfer("512000")
	.buildAndRegister()
		.langBuilder()
			    .put(english, "Wyvern Solar Panel")
			.build()
		.recipeBuilder()
			.shape("ppp", "8c8", "8c8")
			.bind('p', photovoltaic_cell_wyvern)
			.bind('8', item("solarflux:sp_8"))
			.bind('c', item("draconicevolution:wyvern_core"))
		.build(2);

		draco=panel()
		.name("draconic")
		.height(6 / 16.0)
		.generation("131072")
		.capacity("512000000")
		.transfer("1024000")
	.buildAndRegister()
		.langBuilder()
			    .put(english, "Draconic Solar Panel")
			.build()
		.recipeBuilder()
			.shape("ppp", "8c8", "8c8")
			.bind('p', photovoltaic_cell_draconic)
			.bind('8', wyvern)
			.bind('c', item("draconicevolution:awakened_core"))
		.build(2);

		chaotic=panel()
		.name("chaotic")
		.height(6 / 16.0)
		.generation("524288")
		.capacity("2048000000")
		.transfer("4096000")
	.buildAndRegister()
		.langBuilder()
			    .put(english, "Chaotic Solar Panel")
			.build()
		.recipeBuilder()
			.shape("ppp", "8c8", "8c8")
			.bind('p', photovoltaic_cell_chaotic)
			.bind('8', draco)
			.bind('c', item("draconicevolution:chaotic_core"))
		.build(2);

		neutron=panel()
		.name("neutronium")
		.height(6 / 16.0)
		.generation("8388608")
		.capacity("131072000000")
		.transfer("32768000")
	.buildAndRegister()
		.langBuilder()
			    .put(english, "Neutronium Solar Panel")
			.build()
		.recipeBuilder()
			.shape("ppp", "8c8", "8c8")
			.bind('p', photovoltaic_cell_neutronium)
			.bind('8', chaotic)
			.bind('c', item("avaritia:neutronium_ingot"))
		.build(2);

		infinity =panel()
		.name("infinity")
		.height(6 / 16.0)
		.generation("16777216")
		.capacity("262144000000")
		.transfer("65536000")
	.buildAndRegister()
		.langBuilder()
			    .put(english, "Infinity Solar Panel")
			.build()
		.recipeBuilder()
			.shape("ppp", "8c8", "8c8")
			.bind('p', photovoltaic_cell_infinity)
			.bind('8', neutron)
			.bind('c', item("avaritia:infinity_catalyst"))
		.build(2);

   // Comment end
}

/*
* This method is used to register additional recipes
* Below listed all vanilla options for adding recipes.
*/

function registerRecipes($)
{
    // IF you have a mod with custom recipe type, register them with the following:
    // $.add(IRecipe<?>)
    // Just don't forget to import the recipe class.
    // To pass an ingredient to a recipe wrap your item()/tag() call in a ingredient().
    // Basically this will create Minecraft Ingredient: ingredient(tag("forge", "storage_blocks/emerald"))

}