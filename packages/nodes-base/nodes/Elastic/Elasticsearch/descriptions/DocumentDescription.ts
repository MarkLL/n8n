import {
	INodeProperties,
} from 'n8n-workflow';

import * as placeholders from './placeholders';

export const documentOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'document',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a document',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a document',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a document',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all documents',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a document',
			},
		],
		default: 'get',
		description: 'Operation to perform',
	},
] as INodeProperties[];

export const documentFields = [
	// ----------------------------------------
	//             document: delete
	// ----------------------------------------
	{
		displayName: 'Index ID',
		name: 'indexId',
		description: 'ID of the index containing the document to delete',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'document',
				],
				operation: [
					'delete',
				],
			},
		},
	},
	{
		displayName: 'Document ID',
		name: 'documentId',
		description: 'ID of the document to delete',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'document',
				],
				operation: [
					'delete',
				],
			},
		},
	},

	// ----------------------------------------
	//              document: get
	// ----------------------------------------
	{
		displayName: 'Index ID',
		name: 'indexId',
		description: 'ID of the index containing the document to retrieve',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'document',
				],
				operation: [
					'get',
				],
			},
		},
	},
	{
		displayName: 'Document ID',
		name: 'documentId',
		description: 'ID of the document to retrieve',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'document',
				],
				operation: [
					'get',
				],
			},
		},
	},
	{
		displayName: 'Simple',
		name: 'simple',
		type: 'boolean',
		default: true,
		description: 'Whether to return a simplified version of the response instead of the raw data',
		displayOptions: {
			show: {
				resource: [
					'document',
				],
				operation: [
					'get',
				],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'document',
				],
				operation: [
					'get',
				],
			},
		},
		options: [
			{
				displayName: 'Source Excludes',
				name: '_source_excludes',
				description: 'Comma-separated list of source fields to exclude from the response',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Source Includes',
				name: '_source_includes',
				description: 'Comma-separated list of source fields to include in the response',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Stored Fields',
				name: 'stored_fields',
				description: 'If true, retrieve the document fields stored in the index rather than the document <code>_source</code>. Defaults to false',
				type: 'boolean',
				default: false,
			},
		],
	},

	// ----------------------------------------
	//             document: getAll
	// ----------------------------------------
	{
		displayName: 'Index ID',
		name: 'indexId',
		description: 'ID of the index containing the documents to retrieve',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'document',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: [
					'document',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		description: 'How many results to return',
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: {
				resource: [
					'document',
				],
				operation: [
					'getAll',
				],
				returnAll: [
					false,
				],
			},
		},
	},
	{
		displayName: 'Simple',
		name: 'simple',
		type: 'boolean',
		default: true,
		description: 'Whether to return a simplified version of the response instead of the raw data',
		displayOptions: {
			show: {
				resource: [
					'document',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'document',
				],
				operation: [
					'getAll',
				],
			},
		},
		options: [
			{
				displayName: 'Allow No Indices',
				name: 'allow_no_indices',
				description: 'If false, return an error if any of the following targets only missing/closed indices: wildcard expression, index alias, or <code>_all</code> value. Defaults to true',
				type: 'boolean',
				default: true,
			},
			{
				displayName: 'Allow Partial Search Results',
				name: 'allow_partial_search_results',
				description: '<p>If true, return partial results if there are shard request timeouts or shard failures.</p><p>If false, returns an error with no partial results. Defaults to true.</p>',
				type: 'boolean',
				default: true,
			},
			{
				displayName: 'Batched Reduce Size',
				name: 'batched_reduce_size',
				description: 'Number of shard results that should be reduced at once on the coordinating node. Defaults to 512',
				type: 'number',
				typeOptions: {
					minValue: 2,
				},
				default: 512,
			},
			{
				displayName: 'CCS Minimize Roundtrips',
				name: 'ccs_minimize_roundtrips',
				description: 'If true, network round-trips between the coordinating node and the remote clusters are minimized when executing cross-cluster search (CCS) requests. Defaults to true',
				type: 'boolean',
				default: true,
			},
			{
				displayName: 'Doc Value Fields',
				name: 'docvalue_fields',
				description: 'Comma-separated list of fields to return as the docvalue representation of a field for each hit',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Expand Wildcards',
				name: 'expand_wildcards',
				description: 'Type of index that wildcard expressions can match. Defaults to <code>open</code>',
				type: 'options',
				options: [
					{
						name: 'All',
						value: 'all',
					},
					{
						name: 'Closed',
						value: 'closed',
					},
					{
						name: 'Hidden',
						value: 'hidden',
					},
					{
						name: 'None',
						value: 'none',
					},
					{
						name: 'Open',
						value: 'open',
					},
				],
				default: 'open',
			},
			{
				displayName: 'Explain',
				name: 'explain',
				description: 'If true, return detailed information about score computation as part of a hit. Defaults to false',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Ignore Throttled',
				name: 'ignore_throttled',
				description: 'If true, concrete, expanded or aliased indices are ignored when frozen. Defaults to true',
				type: 'boolean',
				default: true,
			},
			{
				displayName: 'Ignore Unavailable',
				name: 'ignore_unavailable',
				description: 'If true, missing or closed indices are not included in the response. Defaults to false',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Max Concurrent Shard Requests',
				name: 'max_concurrent_shard_requests',
				description: 'Define the number of shard requests per node this search executes concurrently. Defaults to 5',
				type: 'number',
				default: 5,
			},
			{
				displayName: 'Pre-Filter Shard Size',
				name: 'pre_filter_shard_size',
				description: 'Define a threshold that enforces a pre-filter roundtrip to prefilter search shards based on query rewriting. Only used if the number of shards the search request expands to exceeds the threshold',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 1,
			},
			{
				displayName: 'Query',
				name: 'query',
				description: 'Query in the <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html">Elasticsearch Query DSL</a>',
				type: 'json',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
				default: '',
				placeholder: placeholders.query,
			},
			{
				displayName: 'Request Cache',
				name: 'request_cache',
				description: 'If true, the caching of search results is enabled for requests where size is 0. See <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/shard-request-cache.html">Elasticsearch shard request cache settings</a>',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Routing',
				name: 'routing',
				description: 'Target this primary shard',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Search Type',
				name: 'search_type',
				description: 'How distributed term frequencies are calculated for relevance scoring. Defaults to Query then Fetch',
				type: 'options',
				options: [
					{
						name: 'DFS Query Then Fetch',
						value: 'dfs_query_then_fetch',
					},
					{
						name: 'Query Then Fetch',
						value: 'query_then_fetch',
					},
				],
				default: 'query_then_fetch',
			},
			{
				displayName: 'Sequence Number and Primary Term',
				name: 'seq_no_primary_term',
				description: 'If true, return the sequence number and primary term of the last modification of each hit. See <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/optimistic-concurrency-control.html">Optimistic concurrency control</a>',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Sort',
				name: 'sort',
				description: 'Comma-separated list of <code>field:direction</code> pairs',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Stats',
				name: 'stats',
				description: 'Tag of the request for logging and statistical purposes',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Stored Fields',
				name: 'stored_fields',
				description: 'If true, retrieve the document fields stored in the index rather than the document <code>_source</code>. Defaults to false',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Terminate After',
				name: 'terminate_after',
				description: 'Max number of documents to collect for each shard',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Timeout',
				name: 'timeout',
				description: 'Period to wait for active shards. Defaults to <code>1m</code> (one minute). See the <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/common-options.html#time-units">Elasticsearch time units reference</a>',
				type: 'string',
				default: '1m',
			},
			{
				displayName: 'Track Scores',
				name: 'track_scores',
				description: 'If true, calculate and return document scores, even if the scores are not used for sorting. Defaults to false',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Track Total Hits',
				name: 'track_total_hits',
				description: 'Number of hits matching the query to count accurately. Defaults to 10000',
				type: 'number',
				default: 10000,
			},
			{
				displayName: 'Version',
				name: 'version',
				description: 'If true, return document version as part of a hit. Defaults to false',
				type: 'boolean',
				default: false,
			},
		],
	},

	// ----------------------------------------
	//             document: create
	// ----------------------------------------
	{
		displayName: 'Index ID',
		name: 'indexId',
		description: 'ID of the index to add the document to',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'document',
				],
				operation: [
					'create',
				],
			},
		},
	},
	{
		displayName: 'Data to Send',
		name: 'dataToSend',
		type: 'options',
		options: [
			{
				name: 'Define Below for Each Column',
				value: 'defineBelow',
				description: 'Set the value for each destination column',
			},
			{
				name: 'Auto-map Input Data to Columns',
				value: 'autoMapInputData',
				description: 'Use when node input properties match destination column names',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'document',
				],
				operation: [
					'create',
				],
			},
		},
		default: 'defineBelow',
		description: 'Whether to insert the input data this node receives in the new row',
	},
	{
		displayName: 'Inputs to Ignore',
		name: 'inputsToIgnore',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'document',
				],
				operation: [
					'create',
				],
				dataToSend: [
					'autoMapInputData',
				],
			},
		},
		default: '',
		required: false,
		description: 'List of input properties to avoid sending, separated by commas. Leave empty to send all properties',
		placeholder: 'Enter properties...',
	},
	{
		displayName: 'Fields to Send',
		name: 'fieldsUi',
		placeholder: 'Add Field',
		type: 'fixedCollection',
		typeOptions: {
			multipleValueButtonText: 'Add Field to Send',
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: [
					'document',
				],
				operation: [
					'create',
				],
				dataToSend: [
					'defineBelow',
				],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Field',
				name: 'fieldValues',
				values: [
					{
						displayName: 'Field Name',
						name: 'fieldId',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Field Value',
						name: 'fieldValue',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'document',
				],
				operation: [
					'create',
				],
			},
		},
		options: [
			{
				displayName: 'Document ID',
				name: 'documentId',
				description: 'ID of the document to create and add to the index',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Routing',
				name: 'routing',
				description: 'Target this primary shard',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Timeout',
				name: 'timeout',
				description: 'Period to wait for active shards. Defaults to <code>1m</code> (one minute). See the <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/common-options.html#time-units">Elasticsearch time units reference</a>',
				type: 'string',
				default: '1m',
			},
		],
	},

	// ----------------------------------------
	//             document: update
	// ----------------------------------------
	{
		displayName: 'Index ID',
		name: 'indexId',
		description: 'ID of the document to update',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'document',
				],
				operation: [
					'update',
				],
			},
		},
	},
	{
		displayName: 'Document ID',
		name: 'documentId',
		description: 'ID of the document to update',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'document',
				],
				operation: [
					'update',
				],
			},
		},
	},
	{
		displayName: 'Data to Send',
		name: 'dataToSend',
		type: 'options',
		options: [
			{
				name: 'Define Below for Each Column',
				value: 'defineBelow',
				description: 'Set the value for each destination column',
			},
			{
				name: 'Auto-map Input Data to Columns',
				value: 'autoMapInputData',
				description: 'Use when node input properties match destination column names',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'document',
				],
				operation: [
					'update',
				],
			},
		},
		default: 'defineBelow',
		description: 'Whether to insert the input data this node receives in the new row',
	},
	{
		displayName: 'Inputs to Ignore',
		name: 'inputsToIgnore',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'document',
				],
				operation: [
					'update',
				],
				dataToSend: [
					'autoMapInputData',
				],
			},
		},
		default: '',
		required: false,
		description: 'List of input properties to avoid sending, separated by commas. Leave empty to send all properties',
		placeholder: 'Enter properties...',
	},
	{
		displayName: 'Fields to Send',
		name: 'fieldsUi',
		placeholder: 'Add Field',
		type: 'fixedCollection',
		typeOptions: {
			multipleValueButtonText: 'Add Field to Send',
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: [
					'document',
				],
				operation: [
					'update',
				],
				dataToSend: [
					'defineBelow',
				],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Field',
				name: 'fieldValues',
				values: [
					{
						displayName: 'Field Name',
						name: 'fieldId',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Field Value',
						name: 'fieldValue',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
] as INodeProperties[];
