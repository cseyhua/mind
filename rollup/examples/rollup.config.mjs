// 可以是数组，配置多个入口点
// 可以是一个函数，返回为可用配置就可
// 并且参数为commandLineArgs
// 例如commandLineArgs.input，可以删除进行屏蔽
/**
 * @type {import('rollup').RollupOptions}
 */
export default {
    // 核心输入选项
    // external,
    input: 'src/main.js',
    // plugins,

    // 进阶输入选项
    // cache,
    // onwarn,
    // preserveEntrySignatures,
    // strictDeprecations,

    // 危险区域
    // acorn,
    // acornInjectPlugins,
    // context,
    // moduleContext,
    // preserveSymlinks,
    // shimMissingExports,
    // treeshake,

    // 实验性
    // experimentalCacheExpiry,
    // experimentalLogSideEffects,
    // perf,

    // 必需（可以是数组，用于描述多个输出）
    /**
     * @type {import('rollup').OutputOptions}
     */
    output: [{
        // 核心庶出选项
        // dir,
        file: 'bundle.min.js',
        format: 'iife', // umd\iife\cjs
        // globals,
        // name,
        // plugins,

        // 进阶输出选项
        // assetFileNames,
        // banner,
        // chunkFileNames,
        // compact,
        // entryFileNames,
        // extend,
        // footer,
        // hoistTransitiveImports,
        // inlineDynamicImports,
		// interop,
		// intro,
		// manualChunks,
		// minifyInternalExports,
		// outro,
		// paths,
		// preserveModules,
		// preserveModulesRoot,
		// sourcemap,
		// sourcemapBaseUrl,
		// sourcemapExcludeSources,
		// sourcemapFile,
		// sourcemapIgnoreList,
		// sourcemapPathTransform,
		// validate,
        
        // 危险区域
		// amd,
		// esModule,
		// exports,
		// externalLiveBindings,
		// freeze,
		// indent,
		// namespaceToStringTag,
		// noConflict,
		// preferConst,
		// sanitizeFileName,
		// strict,
		// systemNullSetters,

        // 实验性
		// experimentalMinChunkSize
    }],

    // watch: {
	// 	buildDelay,
	// 	chokidar,
	// 	clearScreen,
	// 	skipWrite,
	// 	exclude,
	// 	include
	// }
}