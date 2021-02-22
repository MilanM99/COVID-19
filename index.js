
let totalRegistered = $(".total-registered-container p");
let totalDeaths = $(".total-deaths-container p");
let deathsPercentage = $(".deaths-percentage-container p");
let totalTested = $(".total-tested-container p");
let testedToday = $(".tested-today-container p");
let infectedToday = $(".infected-today-container p");
let hospitalizedToday = $(".hospitalized-container p");
let diedToday = $(".died-today-container p");
let banner = $(".banner-container img");
let navMenu = $("nav ul");
let dropDownButtonContainer = $(".drop-down-container");
let counter = 1;

function showStatistics()
{
	totalRegistered.text(dataBase.totalRegistered);
	totalDeaths.text(dataBase.totalDeaths);
	deathsPercentage.text(dataBase.deathsPercentage);
	totalTested.text(dataBase.totalTested);
	testedToday.text(dataBase.testedToday);
	infectedToday.text(dataBase.infectedToday);
	hospitalizedToday.text(dataBase.hospitalizedToday);
	diedToday.text(dataBase.diedToday);
}
showStatistics();

function changeBanner()
{
	setTimeout(function(){
		banner.attr("src", "Images/banner1.jpg");
	},0);

	setTimeout(function(){
		banner.attr("src", "Images/banner2.jpg");
	},5000);

	setTimeout(function(){
		banner.attr("src", "Images/banner3.jpg");
	},10000);

	setTimeout(function(){
		changeBanner();
	},15000);
}
changeBanner();

function showMenu()
{
	if(counter == 1)
	{
		navMenu.slideDown();
		counter++;
		return;
	}
	if(counter == 2)
	{
		navMenu.slideUp();
		counter--;
		return;
	}
}
dropDownButtonContainer.click(showMenu);
navMenu.click(showMenu);