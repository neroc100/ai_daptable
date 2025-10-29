import React from 'react';
import { useUrlCounter } from '../../context/UrlCounterContext';
import { getUrlConfig } from '../../composables/getURLconfig';

function AI_URL_Info_Display_unstructured({ isAnalysisDisplayed = false }) {
  const { currentUrl } = useUrlCounter();
  const config = getUrlConfig(currentUrl);

  // Flatten all features from all categories
  const allFeatures = [
    ...config.urlStringAnalysis.features,
    ...config.domainCharacteristics.features,
    ...config.dnsNetwork.features,
    ...config.encryptionHttp.features,
    ...config.webpageContent.features,
    ...config.geographicalHosting.features,
  ];

  return (
    <div
      className={`w-full rounded-2xl p-4 ${
        isAnalysisDisplayed ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'
      } shadow-sm`}
    >
      <ul className="space-y-2">
        {allFeatures.map((feature, i) => (
          <li
            key={i}
            className="p-2 rounded-lg transition-colors"
          >
            {typeof feature === 'object' ? (
              <span>
                <span className="font-medium">{feature.name}</span>
                {feature.value && <span>: {feature.value}</span>}
              </span>
            ) : (
              <span>{feature}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AI_URL_Info_Display_unstructured;
