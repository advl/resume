
module.exports = {
  plugins: {
    'postcss-reporter':{},
    'css-mqpacker':{},
    'postcss-preset-env':
		{
		  stage: 3,
		  features: {
		    'custom-properties': false
		  }
		},
    'cssnano': {
      discardComments:{ 
        removeAll: true,
        //removeAllButFirst:false
      }
    },
    '@fullhuman/postcss-purgecss':{
      content: ['./dist/**/*.html'],
      rejected:true
    },
  }
}

