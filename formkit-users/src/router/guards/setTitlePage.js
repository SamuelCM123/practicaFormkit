const setTitlePage = ( router ) => {

    router.beforeEach(( to, from, next ) => {

        document.title = to.meta.title;
        next();

    });

}

export { setTitlePage };