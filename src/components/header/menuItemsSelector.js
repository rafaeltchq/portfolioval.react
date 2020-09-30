if (window.innerWidth > 480) {
    const navItems = document.getElementsByClassName("nav__link")
    // const landedNavItem = item => {

    // }
    // console.log(navItems);
    // navItems.for(item => 
    // useEffect(() => {
    for (let i  = 0; i < navItems.length; i++) {
      const item = navItems[i]
      item.classList.remove("land");
      item.addEventListener("click", function () {
      // });
      // item.addEventListener("click", function () {
        item.classList.add("land");
      });
        }
      // })
    }